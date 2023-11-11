function collapseNavbar() {
  let header = document.querySelector('nav');

  if (header.classList.contains('collapsed')) {
    header.classList.remove('collapsed');
    header.classList.add('expanded');
  }
  else if (header.classList.contains('expanded')) {
    header.classList.remove('expanded');
    header.classList.add('collapsed');
  }
}