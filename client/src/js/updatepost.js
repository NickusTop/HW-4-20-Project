const baseUrl = "http://localhost:3000/";

export async function updatePost(idInput, nameInput, infoInput, authorInput) {
  const postId = idInput.value;
  const updatedPost = {
    date: new Date().toLocaleDateString(),
  };

  if (nameInput.value) updatedPost.title = nameInput.value;
  if (infoInput.value) updatedPost.content = infoInput.value;
  if (authorInput.value) updatedPost.author = authorInput.value;

  try {
    const response = await fetch(baseUrl + "posts/" + postId, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });

    if (response.ok) {
      idInput.value = "";
      nameInput.value = "";
      infoInput.value = "";
      authorInput.value = "";
      console.log(await response.json());
    }
  } catch (err) {
    console.log(err);
  }
}
