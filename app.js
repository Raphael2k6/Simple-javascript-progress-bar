const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let scrollHeight = section.getBoundingClientRect().height;
    let progressWidth = (scrollDistance/(scrollHeight - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    console.log( progressWidth);
    progressBar.style.width = `${value}%`;
    if ( value < 0) {
        progressBar.style.width = "0%";
    }
}

window.addEventListener("scroll", animateProgressBar);