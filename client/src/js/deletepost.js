const baseUrl = "http://localhost:3000/";

export async function deletePost(idInput) {
  if (!idInput.value) {
    return;
  }
  const postId = idInput.value;
  try {
    const response = await fetch(baseUrl + "posts/" + postId, {
      method: "DELETE",
    });
    if (response.ok) {
      idInput.value = "";
    }
  } catch (err) {
    console.log(err);
  }
}
