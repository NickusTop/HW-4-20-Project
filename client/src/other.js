import { visibleMenu, visibleMenuDel, visibleMenuEdit } from './js/menufun.js';

const mainDiv = document.querySelector('.main-div');
const postOverlayDiv = document.querySelector('.postoverlay-div');
const postsBtns = document.querySelector('.posts-btns');
const addpostDiv = document.querySelector('.addpost-div');
const delpostDiv = document.querySelector('.delpost-div');
const editpostDiv = document.querySelector('.editpost-div');
const addPostBtn = document.querySelector('.addpost-btn');
const deletePostBtn = document.querySelector('.deletepost-btn');
const editPostBtn = document.querySelector('.editpost-btn');
const backPostBtn = document.querySelector('.backpost-btn');

backPostBtn.addEventListener('click', () => {
  window.location.href = 'http://localhost:5173';
  mainDiv.style.display = 'flex';
  postOverlayDiv.style.display = 'none';
  addpostDiv.style.display = 'none';
  delpostDiv.style.display = 'none';
  addPostBtn.style.display = 'flex';
  editPostBtn.style.display = 'flex';
  deletePostBtn.style.display = 'flex';
  backPostBtn.style.display = 'none';
});

postsBtns.addEventListener('click', (e) => {
  if (e.target.closest('.addpost-btn')) {
    visibleMenu(mainDiv, postOverlayDiv, addpostDiv, delpostDiv, editpostDiv, addPostBtn, editPostBtn, deletePostBtn, backPostBtn); 
  }
  if (e.target.closest('.deletepost-btn')) {
    visibleMenuDel(mainDiv, postOverlayDiv, addpostDiv, delpostDiv, editpostDiv, addPostBtn, editPostBtn, deletePostBtn, backPostBtn);
  }
  if (e.target.closest('.editpost-btn')) {
    visibleMenuEdit(mainDiv, postOverlayDiv, addpostDiv, delpostDiv, editpostDiv, addPostBtn, editPostBtn, deletePostBtn, backPostBtn);
  }
});