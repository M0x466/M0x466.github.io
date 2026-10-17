
const search = document.getElementById("search");
const posts = document.querySelectorAll(".post");

if(search) {
    search.addEventListener("input", function() {
        const query = search.value.toLowerCase().trim();

        posts.forEach(function(post) {
            const text = post.textContent.toLowerCase();

            if(text.includes(query)) {
                post.style.display = "";
            } else {
                post.style.display = "none";
            }
        });
    });
}
