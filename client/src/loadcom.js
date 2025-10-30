import { loadComments, sendComment } from './js/rendercom.js';

const comDiv = document.querySelector('.comments-post-div');
const btnSend = document.querySelector('.btn-send');
const inputCom = document.querySelector('.input-com');
const inputAuthorCom = document.querySelector('.input-author-com');

const postId = localStorage.getItem('selectedPostId');
const baseUrl = 'http://localhost:3000/';

btnSend.addEventListener('click', () => sendComment(inputCom, inputAuthorCom, postId, baseUrl));

if (postId) {
  fetch(`${baseUrl}comments?postId=${postId}`)
    .then((response) => response.json())
    .then((data) => loadComments(data, comDiv))
    .catch((error) => console.error(error));
}
