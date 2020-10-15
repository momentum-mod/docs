const scrollElem = SimpleBar.instances.get($('.sidebar')[0]).getScrollElement();
scrollElem.scrollBy({
  top: $('#sidebar-anchor').position().top - Math.max(scrollElem.clientHeight) / 2 + $('.masthead')[0].clientHeight,
  left: 0,
  behavior: 'smooth'
});
