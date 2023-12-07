const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const navButton = document.querySelector(".nav-button");
const projectBoxes = document.querySelectorAll(".project-box");
const d5 = document.getElementById("d-5");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("nv-active");
    rightSide.classList.toggle("rs-active");
    leftSide.classList.toggle("ls-active");
})

for(let projectBox of projectBoxes){
    const projectImage = projectBox.querySelector(".project-image"); 
    projectBox.addEventListener("mouseover", () => {
        projectImage.style.opacity = "100";
    });
    projectBox.addEventListener("mouseout", () => {
        projectImage.style.opacity = "0";
    })
}

const mainImgHover = (() => {
    const mmImage = document.querySelector(".mm-img-container");
    d5.addEventListener("animationend", () => {
        mmImage.setAttribute("id", "mm-image");
    })
})();
