const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");


let selectedRating = "";

ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        selectedRating = event.target.innertext || event.target.parentNode.innertext;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {
    if(selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `

    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");

    });
}