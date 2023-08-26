function loadPosts(){
    // console.log("loading posts data");
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then ( data => displayPost(data))
}
function displayPost(posts){
    // console.log(posts);
    const postscontainer = document.getElementById('posts-container')
    for (const post of posts){
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
          <h4>User-</h4>  
          <h5>post: title</h5> 
          <p> post des </p>
        `;
        postscontainer.appendChild(postDiv)

       
        console.log(post)
    }
}
loadPosts();