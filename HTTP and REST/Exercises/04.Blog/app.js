function attachEvents() {
    const BASE_URL_BLOG_POSTS = "http://localhost:3030/jsonstore/blog/posts";
    const BASE_URL_BLOG_COMMENTS = "http://localhost:3030/jsonstore/blog/comments";

    const loadPostsBtn = document.getElementById("btnLoadPosts");
    const viewPostBtn = document.getElementById("btnViewPost");

    const dropDownMenu = document.getElementById("posts");
    const blogTitle = document.getElementById("post-title");
    const blogBody = document.getElementById("post-body");
    const blogCommentsList = document.getElementById("post-comments");
    let blogsArr = [];

    loadPostsBtn.addEventListener("click", loadPostsHandler);
    viewPostBtn.addEventListener("click", viewPostHandler);

    function loadPostsHandler() {
        fetch(BASE_URL_BLOG_POSTS, { method: "GET" })
            .then((res) => res.json())
            .then((blogs) => {
                blogsArr = Object.values(blogs);

                blogsArr.forEach((blog) => {
                    const newOption = document.createElement("option");
                    newOption.textContent = blog.title.toUpperCase();
                    newOption.value = blog.id;
                    dropDownMenu.appendChild(newOption);
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function viewPostHandler() {
        fetch(BASE_URL_BLOG_COMMENTS, { method: "GET" })
            .then((res) => res.json())
            .then((comments) => {
                let commentsArr = Object.values(comments);
                let currentPostID = "";
                let currentBody = "";
                let currentPostTitle = dropDownMenu.options[dropDownMenu.selectedIndex].textContent;

                for (const blog of blogsArr) {
                    let selectedBlogTitle = blog.title;
                    if (currentPostTitle === selectedBlogTitle.toUpperCase()) {
                        currentPostID = blog.id;
                        currentBody = blog.body;
                        blogTitle.textContent = selectedBlogTitle;
                    }
                }

                blogBody.textContent = currentBody;

                blogCommentsList.innerHTML = "";

                for (const comment of commentsArr) {
                    if (currentPostID === comment.postId) {
                        const newLi = document.createElement("li");
                        newLi.textContent = comment.text;
                        blogCommentsList.appendChild(newLi)
                    }
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

attachEvents();