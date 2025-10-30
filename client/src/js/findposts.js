const baseUrl = "http://localhost:3000/";

export async function findPosts () {
   try {
     const response = await fetch(baseUrl + "posts");
     const posts = await response.json();
     console.log(posts);
     
   } catch (err) {
      console.log(err);
   }
}
