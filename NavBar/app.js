const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


btn.addEventListener('click', () => {
    if (!links.classList.contains("show-links")) {
        links.classList.add("show-links");
    } else {
        links.classList.remove("show-links");
    }
})