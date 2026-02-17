AOS.init();

// Typing Animation
const text = ["MCA Graduate", "Python Developer", "ML Enthusiast"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
currentText = text[i];
if (!isDeleting) {
document.querySelector(".typing").innerHTML = currentText.substring(0, j++);
if (j > currentText.length) { isDeleting = true; setTimeout(type, 1000); return; }
}
else {
document.querySelector(".typing").innerHTML = currentText.substring(0, j--);
if (j === 0) { isDeleting = false; i = (i + 1) % text.length; }
}
setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Skill Animation
window.addEventListener("scroll", function() {
document.querySelectorAll(".progress-bar").forEach(bar => {
let position = bar.getBoundingClientRect().top;
if(position < window.innerHeight) {
bar.style.width = bar.getAttribute("data-width");
}
});
});