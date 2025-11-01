import { findPosts } from './js/findposts.js';
import { addNewPost } from './js/addpost.js';
import { deletePost } from './js/deletepost.js';
import { updatePost } from './js/updatepost.js';

const postoverlayDiv = document.querySelector('.postoverlay-div');
const addBtn = document.querySelector('.button-addpost');
const addNameInp = document.getElementById('add-name-inp');
const addInfoInp = document.getElementById('add-info-inp');
const addAuthorInp = document.getElementById('add-author-input');
const deleteBtn = document.querySelector('.button-delpost');
const deleteIdInp = document.getElementById('del-id-inp');
const editBtn = document.querySelector('.button-editpost');
const editIdInp = document.getElementById('edit-id-inp');
const editNameInp = document.getElementById('edit-name-inp');
const editInfoInp = document.getElementById('edit-info-inp');
const editAuthorInp = document.getElementById('edit-author-inp');

findPosts();

postoverlayDiv.addEventListener('click', (e) => {
  if (e.target.closest('.button-addpost')) {
    addNewPost(addNameInp, addInfoInp, addAuthorInp);  
  }
  if (e.target.closest('.button-delpost')) {
    deletePost(deleteIdInp);
  }
  if (e.target.closest('.button-editpost')) {
    updatePost(editIdInp, editNameInp, editInfoInp, editAuthorInp);
  }
});

