export async function loadComments(data, comDiv) {
  if (!data || data.length === 0) {
    comDiv.innerHTML = '<p class="no-comments">Немає коментарів(</p>';
    return;
  }

  comDiv.innerHTML = "";
  for (const comment of data) {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment-div";
    commentDiv.innerHTML = `
      <h2 class="h2-author">${comment.name}</h2>
      <p class="p-comment">${comment.text}</p>
    `;
    comDiv.appendChild(commentDiv);
  }
}

export async function sendComment(inputCom, inputAuthorCom, postId, baseUrl) {
  const commentText = inputCom.value.trim();
  const commentAuthor = inputAuthorCom.value.trim();

  if (commentText === "" || commentAuthor === "") return;

  const newComment = {
    postId,
    name: commentAuthor,
    text: commentText,
  };

  try {
    const response = await fetch(`${baseUrl}comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });
    inputCom.value = "";
    inputAuthorCom.value = "";
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
}
