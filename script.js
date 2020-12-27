const hamburger = document.querySelector(".hameburger");
const twoBars = document.querySelectorAll(".bar");
const header = document.querySelector("header");
const circles = document.querySelectorAll(".circle");
const image = document.querySelector(".part2 img");


hamburger.addEventListener("click",()=>{
    header.classList.toggle("active");

    twoBars[0].classList.toggle("b0");
    twoBars[2].classList.toggle("b2");
});


circles[0].addEventListener("click",()=>{
    image.src = "1.png";
});

circles[1].addEventListener("click",()=>{
    image.src = "2.png";
});

circles[2].addEventListener("click",()=>{
    image.src = "3.png";
});


