function clicker() {
    model.data.clickCount += model.data.multiplier;
    updateUI();
    saveGame();
}
const asteroideButton = document.getElementById("asteroide");

asteroideButton.addEventListener("click", () => {
    asteroideButton.classList.remove("clicked"); // reset in case it's still on
    void asteroideButton.offsetWidth; // 🔄 force reflow to restart animation
    asteroideButton.classList.add("clicked");

    // Restore pulse after pop finishes
    setTimeout(() => {
        asteroideButton.classList.remove("clicked");
    }, 200); // same as pop animation duration
});
