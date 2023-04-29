const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");
const navButton = document.getElementById("nav-button");

let rightClick = 0;

navButton.addEventListener("click", () => {
    if (rightClick === 0){
        rightClick = 1;
        rightSide.style.width = "25%";
        leftSide.style.width = "75%";
    } else if (rightClick === 1){
        rightClick = 0;
        rightSide.style.width = "0%";
        leftSide.style.width = "100%";
    }
})