const baseUrl = "http://localhost:3000/";

export async function deletePost(idInput) {
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
