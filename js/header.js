/* eslint-disable no-unused-vars */
/**
 * Toggles search
 */
const toggleSearch = () => {
  selElem('.navbar-nav.navbar-nav--header').classList.toggle('d-xl-none');
  selElem('.form.form--search').classList.toggle('should-show');
  selElem('#header').classList.toggle('pb-5');
};
