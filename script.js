
// event to when click  the cards on picture it run the animation
const picturesCard = document.querySelector(".pictures-card",);

picturesCard.addEventListener("click", () => {
    const img = picturesCard.querySelector("img");
    img.classList.add("rotate");

    // Remove the class after the animation ends to allow re-triggering
    img.addEventListener("animationend", () => {
        img.classList.remove("rotate");
    }, { once: true });
});


const toggleButton = document.getElementById("toggle-pictures-btn");
const picturesContainer = document.querySelector(".ui-card");

// button to toggle the visibility of the pictures container
toggleButton.addEventListener("click", () => {
    if (picturesContainer.style.display === "none") {
        picturesContainer.style.display = "block";
    } else {
        picturesContainer.style.display = "none";
    }
});