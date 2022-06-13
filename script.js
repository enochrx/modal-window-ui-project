'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', function () {
    console.log('click button');
  });
