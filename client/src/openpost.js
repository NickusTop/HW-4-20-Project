const h2Name = document.querySelector('.h2-name');
const pContent = document.querySelector('.p-content');
const pAuthor = document.querySelector('.p-author');
const pDate = document.querySelector('.p-date');
const btnBack = document.querySelector('.btn-back');

btnBack.addEventListener('click', () => {
  window.location.href = 'http://localhost:5173';
  h2Name.textContent = '';
  pContent.textContent = '';
  pAuthor.textContent = '';
  pDate.textContent = '';
});

const postId = localStorage.getItem("selectedPostId");

const baseUrl = "http://localhost:3000/";

if (postId) {
  fetch(`${baseUrl}posts/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      openPost(data);
    })
    .catch((error) => console.error(error));
}

function openPost(data) {
  h2Name.textContent = data.title;
  pContent.textContent = data.content;
  pAuthor.textContent = `By: ${data.author}`;
  pDate.textContent = `Опубліковано: ${data.date}`;
}

