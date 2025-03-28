function updateUpgradeDisplay() {
    const upgradeDisplay = document.getElementById("upgradeDisplay");
    upgradeDisplay.innerHTML = '';

    model.data.upgrades.forEach(upgrade => {
        if (upgrade.level > -1) {
            upgradeDisplay.innerHTML += `
                <div class="upgrade-item">
                    <img src="${upgrade.image}" alt="${upgrade.name}" width="40">
                    ${upgrade.name}: ${upgrade.level}
                </div>
            `;
        }
    });
}
function updateUpgradeButtons() {
    const miner = model.data.upgrades.find(u => u.id === 1);
    const driller = model.data.upgrades.find(u => u.id === 2);
    const spaceminer = model.data.upgrades.find(u => u.id === 3);

    document.getElementById("upgradeButton").innerText = `Buy Miner (Cost: ${miner.cost})`;
    document.getElementById("upgradeButtonTwo").innerText = `Buy Driller (Cost: ${driller.cost})`;
    document.getElementById("upgradeButtonThree").innerText = `Buy Spaceminer (Cost: ${spaceminer.cost})`;
}
