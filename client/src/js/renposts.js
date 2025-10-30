const baseUrl = "http://localhost:3000/";

export async function renderPosts(divPosts) {
  try {
    const response = await fetch(baseUrl + "posts");
    const posts = await response.json();
    divPosts.innerHTML = posts
      .map((post) => {
        let smallContent = post.content;
        if (post.content.length > 50) {
          smallContentContent = post.content.slice(0, 50) + "...";
        }

        return `
          <div class="post" id="post-${post.id}">
            <h2 class="h2-post">${post.title}</h2>
            <div class="line"></div>
            <p class="pc-post">${smallContent}</p>
            <p class="pa-post">${post.author}</p>
            <p class="pd-post">${post.date}</p>
          </div>
        `;
      })
      .join("");
  } catch (err) {
    console.log(err);
  }
}
