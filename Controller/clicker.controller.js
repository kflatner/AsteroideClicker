function clicker() {
    model.data.clickCount += model.data.multiplier;
    updateUI();
    saveGame();
}
const asteroideButton = document.getElementById("asteroide");

asteroideButton.addEventListener("click", () => {
    asteroideButton.classList.remove("clicked"); 
    void asteroideButton.offsetWidth; 
    asteroideButton.classList.add("clicked");

    
    setTimeout(() => {
        asteroideButton.classList.remove("clicked");
    }, 200); 
});
