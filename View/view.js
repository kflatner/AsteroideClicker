
function updateUI() {
    document.getElementById("score-value").textContent = model.data.clickCount;

    updateUpgradeButtons();
    updateUpgradeDisplay();
    updateSealButtons();
    updateSealButtons();
    
   
}
function updateLocations(){
    document.getElementById("score-value").textContent = model.data.clickCount;

    updateUpgradeButtons();
   

}

// function showInfo(text) {
//     document.getElementById("infoBox").innerText = text;
    
// }

// function hideInfo() {
//     document.getElementById("infoBox").innerText = "Hover over an upgrade to see details.";
// }


// function updateUI() {
//     document.getElementById("upgradeButton").innerText = `Miner     Cost: ${minerCost}`;
    // document.getElementById("upgradeButtonTwo").innerText = `Machine Driller    Cost: ${upgradeCostDriller}`;
    // document.getElementById("upgradeButtonThree").innerText = `SpaceShip Driller    Cost: ${upgradeCostsSpaceship}`;
    // document.getElementById("buyFactoryButton").innerText = ` Buy SpaceFactory  : ${upgradeCostFactory}`;
    // document.getElementById("buyFarmButton").innerText = ` Buy SpaceFarm  : ${upgradeCostFarm}`;
    // document.getElementById("buyBarButton").innerText = ` Buy SpaceBar  : ${upgradeCostBar}`;
    // document.getElementById("buySchoolButton").innerText = ` Buy SpaceSchool  : ${upgradeCostSchool}`;
    // document.getElementById("clickerUpgradeDisplay").innerHTML = `<img src="img/miner2.png" alt="Miner Logo" width="50" height="50">= ${upgradesBought}`;
    // document.getElementById("drillerUpgradeDisplay").innerHTML = `<img src="img/driller.webp" alt="Miner Logo" width="50" height="50">= ${upgradesBoughtTwo}`;
    // document.getElementById("shipUpgradeDisplay").innerHTML = `<img src="img/spaceminer.webp" alt="Miner Logo" width="50" height="50">= ${upgradesBoughtThree}`;
    // document.getElementById("spaceFactoryUpgradeDisplay").innerHTML = `<img src="img/spaceFactory.webp" alt="Miner Logo" width="50" height="50">=LvL ${upgradesBoughtFactory}`;
    // document.getElementById("spaceBarUpgradeDisplay").innerHTML = `<img src="img/spacebar.webp" alt="Miner Logo" width="50" height="50">=LvL ${upgradesBoughtBar}`;
    // document.getElementById("spaceSchoolUpgradeDisplay").innerHTML = `<img src="img/spaceschool.webp" alt="Miner Logo" width="50" height="50">=LvL ${upgradesBoughtSchool}`;
    // document.getElementById("spaceFarmUpgradeDisplay").innerHTML = `<img src="img/spacefarm.webp" alt="Miner Logo" width="50" height="50">=LvL ${upgradesBoughtFarm}`;
    // document.getElementById("score-value").textContent = clickCount;
    
    
    
