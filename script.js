// LOGIN

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("loginMessage");

    if (username === "Nancy" && password === "Nancy@123") {

        message.textContent = "Login successful! 🍴";
        message.style.color = "green";

        setTimeout(function() {
            document.getElementById("loginPage").style.display = "none";
            document.getElementById("mainWebsite").style.display = "block";
        }, 800);

    } else {

        message.textContent = "Invalid username or password!";
        message.style.color = "red";

    }
}


// MOBILE MENU

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("show");
}


// DARK MODE

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


// READ BLOG

function readBlog(title, content) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalContent").textContent = content;

    document.getElementById("blogModal").style.display = "flex";
}


// CLOSE BLOG

function closeBlog() {
    document.getElementById("blogModal").style.display = "none";
}


// SEARCH BLOGS

function searchBlogs() {

    let search =
        document.getElementById("searchInput").value.toLowerCase();

    let blogs =
        document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        let title =
            blog.querySelector("h3").textContent.toLowerCase();

        let content =
            blog.querySelector("p").textContent.toLowerCase();

        if (
            title.includes(search) ||
            content.includes(search)
        ) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }

    });
}


// FILTER BLOGS

function filterBlogs() {

    let category =
        document.getElementById("categoryFilter").value;

    let blogs =
        document.querySelectorAll(".blog-card");

    blogs.forEach(function(blog) {

        if (
            category === "all" ||
            blog.dataset.category === category
        ) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }

    });
}


// CATEGORY CARD

function selectCategory(category) {

    document.getElementById("categoryFilter").value = category;

    filterBlogs();

    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });
}


// ADD NEW BLOG

function addBlog(event) {

    event.preventDefault();

    let title =
        document.getElementById("blogTitle").value.trim();

    let category =
        document.getElementById("blogCategory").value;

    let content =
        document.getElementById("blogContent").value.trim();

    if (!title || !category || !content) {

        alert("Please fill all fields.");

        return;
    }


    let blog =
        document.createElement("article");

    blog.className = "blog-card";

    blog.dataset.category = category;


    let image =
        document.createElement("img");

    image.src =
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80";

    image.alt = "Food";


    let contentBox =
        document.createElement("div");

    contentBox.className = "blog-content";


    let categoryText =
        document.createElement("span");

    categoryText.textContent = category;


    let heading =
        document.createElement("h3");

    heading.textContent = title;


    let paragraph =
        document.createElement("p");

    paragraph.textContent = content;


    let button =
        document.createElement("button");

    button.textContent = "Read More →";


    button.onclick = function() {

        readBlog(title, content);

    };


    contentBox.appendChild(categoryText);

    contentBox.appendChild(heading);

    contentBox.appendChild(paragraph);

    contentBox.appendChild(button);


    blog.appendChild(image);

    blog.appendChild(contentBox);


    document
        .getElementById("blogContainer")
        .prepend(blog);


    document.getElementById("blogTitle").value = "";

    document.getElementById("blogCategory").value = "";

    document.getElementById("blogContent").value = "";


    alert("Your food blog has been published!");
}


// CLOSE MODAL WHEN CLICKING OUTSIDE

window.onclick = function(event) {

    let modal =
        document.getElementById("blogModal");

    if (event.target === modal) {

        closeBlog();

    }
};