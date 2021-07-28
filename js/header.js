/* eslint-disable no-unused-vars */
/**
 * Toggles search
 */
const toggleSearch = () => {
  selElem('.navbar-nav.navbar-nav--header').classList.toggle('d-xl-none');
  selElem('.form.form--search').classList.toggle('should-show');
  selElem('#header').classList.toggle('pb-5');
};

window.addEventListener('scroll', () => {
  const header = selElem('#header');
  const {offsetHeight} = header;
  const {pageYOffset} = window;
  const isAtHeader = pageYOffset < offsetHeight;

  if (!isAtHeader) {
    const {pathname} = window.location;
    header.classList.add('shadow');

    return pathname.includes('index') || !pathname.includes('.html') ?
      header.classList.add('bg-success--custom') :
      header.classList.add('bg-white');
  } else {
    header.classList.remove('shadow');
    header.classList.remove('bg-white');
    header.classList.remove('bg-success--custom');
  }
});
