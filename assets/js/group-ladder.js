// Interactive explorer for the group system (content/docs/guide/group-system.md).
// Rendered by the `group-ladder` shortcode. The model functions below are the
// reference implementation of the formulas described on that page.
(() => {
  const TOP = 10;
  const DEFAULTS = { p1: 2, f1: 15, nc: 6, q: 67, nt: 0, gc: 67, mg: 100, w: 5 };

  // ---- Model -------------------------------------------------------------

  function geom(X, P) {
    const c1 = Math.max(P.f1, Math.floor((X * P.p1) / 100) + TOP);
    const cap = Math.min(X, Math.max(Math.round((X * P.gc) / 100), P.mg));
    const Q = Math.max(c1, Math.min(Math.max((X * P.q) / 100, P.mg), cap));
    return { c1, cap, Q };
  }

  // Returns the cutoff (last rank) of every group, best group first.
  function cutoffs(X, P) {
    const { c1, cap, Q } = geom(X, P);
    let prev = TOP;
    const out = [];
    const add = (ideal) => {
      const v = Math.max(prev, Math.min(cap, Math.max(Math.round(ideal), prev + P.w)));
      out.push(v);
      prev = v;
    };
    for (let i = 0; i < P.nc; i++) add(P.nc === 1 ? Q : c1 * Math.pow(Q / c1, i / (P.nc - 1)));
    const base = prev;
    for (let j = 1; j <= P.nt; j++) add(j === P.nt ? cap : base + ((cap - base) * j) / P.nt);
    return out;
  }

  const sizesOf = (cuts) => {
    let p = TOP;
    return cuts.map((c) => {
      const s = c - p;
      p = c;
      return s;
    });
  };

  // Group index (0-based) of a rank, -1 for Top 10, cuts.length for no group.
  const groupOf = (rank, cuts) => {
    if (rank <= TOP) return -1;
    const i = cuts.findIndex((c) => c >= rank);
    return i < 0 ? cuts.length : i;
  };

  // ---- Helpers -----------------------------------------------------------

  const fmt = (v) => Math.round(v).toLocaleString('en-US');
  const int = (el, fb, min, max) => {
    const v = parseInt(el.value, 10);
    return Math.min(max ?? Infinity, Math.max(min, Number.isNaN(v) ? fb : v));
  };
  const num = (el, fb, min, max) => {
    const v = parseFloat(el.value);
    return Math.min(max ?? Infinity, Math.max(min, Number.isNaN(v) ? fb : v));
  };
  const range = (a, b) => (a === b ? `#${fmt(a)}` : `#${fmt(a)}–#${fmt(b)}`);
  const groupName = (i, n) => (i < 0 ? 'Top 10' : i >= n ? 'no group' : `G${i + 1}`);

  function init(root) {
    const q = (sel) => root.querySelector(sel);
    const qa = (sel) => [...root.querySelectorAll(sel)];
    const param = (k) => q(`[data-param="${k}"]`);

    const readParams = () => ({
      p1: num(param('p1'), DEFAULTS.p1, 0.1),
      f1: int(param('f1'), DEFAULTS.f1, 11),
      nc: int(param('nc'), DEFAULTS.nc, 1, 12),
      q: num(param('q'), DEFAULTS.q, 10, 100),
      nt: int(param('nt'), DEFAULTS.nt, 0, 6),
      gc: num(param('gc'), DEFAULTS.gc, 10, 100),
      mg: int(param('mg'), DEFAULTS.mg, 0),
      w: int(param('w'), DEFAULTS.w, 1)
    });

    const isDefault = (P) => Object.keys(DEFAULTS).every((k) => P[k] === DEFAULTS[k]);

    // Colour of group i, matching the in-game group pills. Groups past G6 (only possible with
    // non-default parameters) reuse the G6 colour.
    const groupStyle = (i) => `--seg:var(--gl-g${Math.min(i, 5) + 1});--seg-text:var(--gl-g${Math.min(i, 5) + 1}-text)`;

    function renderSummary(X, P, cuts) {
      const { c1, cap, Q } = geom(X, P);
      const ratio = P.nc > 1 ? Math.pow(Q / c1, 1 / (P.nc - 1)) : 1;
      const set = (k, v) => (q(`[data-out="${k}"]`).textContent = v);
      set('c1', fmt(c1));
      set('cap', fmt(cap));
      set('Q', fmt(Q));
      set('r', `×${ratio.toFixed(2)}`);
      set('groups', String(cuts.length));
    }

    function renderBar(X, P, cuts, rank) {
      const log = q('[data-scale]').value === 'log';
      // Rank r occupies the interval [r - 1, r]; map interval ends to 0..100%.
      const pos = (x) => (log ? Math.log1p(x) / Math.log1p(X) : x / X) * 100;
      const segs = [{ a: 0, b: Math.min(TOP, X), label: 'Top 10', cls: 'top' }];
      let prev = TOP;
      cuts.forEach((c, i) => {
        if (c > prev) segs.push({ a: prev, b: c, label: `G${i + 1}`, style: groupStyle(i) });
        prev = c;
      });
      if (X > prev) segs.push({ a: prev, b: X, label: 'No group', cls: 'none' });

      q('[data-bar]').innerHTML = segs
        .map((s) => {
          const l = pos(s.a), w = pos(s.b) - l;
          const tip = `${s.label}: ranks ${range(s.a + 1, s.b)} (${fmt(s.b - s.a)} players)`;
          return `<div class="gl-seg ${s.cls || ''}" style="left:${l}%;width:${w}%;${s.style || ''}" title="${tip}">
            <span>${s.label}</span></div>`;
        })
        .join('');
      // Hide labels that do not fit inside their segment.
      qa('[data-bar] .gl-seg span').forEach((el) => {
        if (el.offsetWidth + 4 > el.parentElement.clientWidth) el.hidden = true;
      });
    }

    function renderGroups(X, P, cuts, rank) {
      const sz = sizesOf(cuts);
      const mine = rank ? groupOf(rank, cuts) : null;
      const row = (name, rng, size, cut, climb, cls, style) =>
        `<tr class="${cls}"><th scope="row"><span class="gl-swatch" style="${style}"></span>${name}</th>
          ${rng}<td>${size}</td><td>${cut}</td><td>${climb}</td></tr>`;
      const rcells = (a, b) => `<td>#${fmt(a)}<span class="gl-dash">–</span>#${fmt(b)}</td>`;
      const top = Math.min(TOP, X);
      let html = row('Top 10', rcells(1, top), fmt(top), `${((top / X) * 100).toFixed(1)}%`, '–',
        `top ${mine === -1 ? 'me' : ''}`, '');
      sz.forEach((s, i) => {
        const start = (i ? cuts[i - 1] : TOP) + 1;
        const climb = s > 0 ? (s / cuts[i]) * 100 : 0;
        const cc = s === 0 ? '' : climb < 8 ? 'vlow' : climb < 20 ? 'low' : '';
        html += row(
          `G${i + 1}${i >= P.nc ? ' <small>linear</small>' : ''}`,
          s > 0 ? rcells(start, cuts[i]) : '<td class="gl-dim">empty</td>',
          fmt(s),
          `${((s / X) * 100).toFixed(1)}%`,
          s > 0 ? `<span class="gl-climb ${cc}">${climb.toFixed(0)}%</span>` : '–',
          `${s === 0 ? 'empty' : ''} ${mine === i ? 'me' : ''}`,
          groupStyle(i)
        );
      });
      const last = cuts[cuts.length - 1];
      if (X > last)
        html += row('No group', rcells(last + 1, X), fmt(X - last), `${(((X - last) / X) * 100).toFixed(1)}%`, '–',
          `none ${mine === cuts.length ? 'me' : ''}`, '');
      q('[data-groups]').innerHTML = html;
    }

    function renderLookup(X, P, cuts, rank) {
      const out = q('[data-lookup]');
      out.hidden = !rank;
      if (!rank) return;
      if (rank > X) {
        out.innerHTML = `There are only ${fmt(X)} completions on this map, so rank ${fmt(rank)} does not exist.`;
        return;
      }
      const i = groupOf(rank, cuts);
      if (i === -1) {
        out.innerHTML = `Rank <b>${fmt(rank)}</b> is in the <b>Top 10</b>.`;
        return;
      }
      const start = (i ? cuts[i - 1] : TOP) + 1;
      const here = i < cuts.length
        ? `Rank <b>${fmt(rank)}</b> is in <b>G${i + 1}</b> (ranks ${range(start, cuts[i])}).`
        : `Rank <b>${fmt(rank)}</b> is not in any group (groups end at rank ${fmt(cuts[cuts.length - 1])}).`;
      const target = i === 0 ? TOP : cuts[i - 1];
      const pass = rank - target;
      out.innerHTML = `${here} To reach <b>${groupName(i - 1, cuts.length)}</b> you need rank ${fmt(target)} or better: ` +
        `pass ${fmt(pass)} player${pass === 1 ? '' : 's'} (${((pass / (rank - 1)) * 100).toFixed(0)}% of the players ahead of you).`;
    }

    function render() {
      const P = readParams();
      const X = int(q('[data-x]'), 1000, 1);
      const rv = parseInt(q('[data-rank]').value, 10);
      const rank = Number.isNaN(rv) || rv < 1 ? null : rv;
      const cuts = cutoffs(X, P);
      q('[data-modified]').hidden = isDefault(P);
      renderSummary(X, P, cuts);
      renderBar(X, P, cuts, rank && rank <= X ? rank : null);
      renderGroups(X, P, cuts, rank && rank <= X ? rank : null);
      renderLookup(X, P, cuts, rank);
    }

    qa('input[data-param], [data-x], [data-rank]').forEach((el) => el.addEventListener('input', render));
    qa('[data-scale]').forEach((el) => el.addEventListener('change', render));
    q('[data-reset-params]').addEventListener('click', () => {
      Object.entries(DEFAULTS).forEach(([k, v]) => (param(k).value = v));
      render();
    });

    render();
  }

  const start = () => document.querySelectorAll('.group-ladder').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
