export let postId = null;

const baseUrl = "http://localhost:3000/";

document.addEventListener("click", (e) => {
  const post = e.target.closest(".post");
  if (post) {
    const postIdDiv = post.id;
    postId = postIdDiv.replaceAll("post-", "");
    console.log(postId);
    fetch(`${baseUrl}posts/${postId}`)
      .then((response) => response.json())
      .then(() => {
        localStorage.setItem("selectedPostId", postId);
        window.location.href = `http://localhost:5173/post.html`;
      })
      .catch((error) => console.error(error));
  }
});
