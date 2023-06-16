const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");
const navButton = document.getElementById("nav-button");
const projectBoxes = document.querySelectorAll(".project-box");
const d5 = document.getElementById("d-5");

let rightClick = 0;

navButton.addEventListener("click", () => {
    if (rightClick === 0){
        navButton.style.transform = "rotate(0deg)";
        rightClick = 1;
        rightSide.style.width = "25%";
        leftSide.style.width = "75%";
    } else if (rightClick === 1){
        navButton.style.transform = "rotate(45deg)";
        rightClick = 0;
        rightSide.style.width = "0%";
        leftSide.style.width = "100%";
    }
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
