'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

console.log(btnsShowModal);

const openModal = function () {
  console.log('click button');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
