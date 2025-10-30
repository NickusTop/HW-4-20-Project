const baseUrl = "http://localhost:3000/";

export async function addNewPost(nameInput, infoInput, authorInput) {
  const newPost = {
    title: nameInput.value,
    content: infoInput.value,
    author: authorInput.value,
    date: new Date().toLocaleDateString(),
  };
  
  try {
    const response = await fetch(baseUrl + "posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    
    if (response.ok) {
      nameInput.value = "";
      infoInput.value = "";
      authorInput.value = "";
    }
  } catch (err) {
    console.log(err);
  }
}
