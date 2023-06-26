let header = document.querySelector("header");
let headerTop = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

    if (scrollTop > headerTop) {
        header.classList.add("on");
    } else {
        header.classList.remove("on");
    }
})