// limit of carousel item
let uperbar = document.getElementById("uperBar"),
  navbar = document.getElementById("navbar"),
  slider = document.querySelectorAll(".slider .carousel-item"),
  height = window.innerHeight - uperbar.offsetHeight - navbar.offsetHeight;
slider.forEach((el) => {
  el.style.minHeight = `${height}px`;
  el.style.maxHeight = `${height}px`;
});

// change  navbar list in small media
let button = document.getElementsByTagName("button")[0],
  links = document.getElementById("link");
button.onclick = () => {
  links.classList.toggle("hide");
};

// change color to active link
let activeLink = document.querySelectorAll(".link li a");
activeLink.forEach((ele) => {
  ele.addEventListener("click", () => {
    activeLink.forEach((el) => {
      el.classList.remove("active");
    });
    ele.classList.add("active");
  });
});
