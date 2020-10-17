const scrollElem = SimpleBar.instances.get(document.getElementsByClassName('sidebar')[0]).getScrollElement();
scrollElem.scrollBy({
  top: document.getElementById('sidebar-anchor').offsetTop - Math.max(scrollElem.clientHeight) / 2 + document.getElementsByClassName('masthead')[0].clientHeight,
  left: 0,
  behavior: 'smooth'
});
