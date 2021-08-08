const open = document.querySelector('#open');
const close = document.querySelector('#close');
const mobile = document.querySelector('.mobile-navbar');

open.addEventListener('click', function () {
  mobile.style.left = 0;
});
close.addEventListener('click', function () {
  mobile.style.left = '-100%';
});
