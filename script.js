// Welcome message
console.log("Welcome to Sreeja Portfolio");

// Dark mode button
const darkButton = document.getElementById("darkModeBtn");

// Event Listener
darkButton.addEventListener("click", function () {

       document.body.classList.toggle("dark-mode");
});