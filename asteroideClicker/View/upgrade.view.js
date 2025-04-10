function updateUpgradeDisplay() {
    const upgradeDisplay = document.getElementById("upgradeDisplay");
    upgradeDisplay.innerHTML = '';

    model.data.upgrades.forEach(upgrade => {
        if (upgrade.level > 0) {
            const imageTag = upgrade.image
                ? `<img src="${upgrade.image}" alt="${upgrade.name}" width="40">`
                : ''; 

            upgradeDisplay.innerHTML += `
                <div class="upgrade-item">
                    ${imageTag}
                    ${upgrade.name}: ${upgrade.level}
                </div>
            `;
        }
    });
}

function updateUpgradeButtons() {
    const upgrades = [
        { id: 1, elementId: "upgradeButton" },
        { id: 2, elementId: "upgradeButtonTwo" },
        { id: 3, elementId: "upgradeButtonThree" },
        { id: 4, elementId: "upgradeButtonFour" },
        { id: 5, elementId: "buyFarmButton" },
        { id: 6, elementId: "buyBarButton" },
        { id: 7, elementId: "buyFactoryButton" },
        { id: 8, elementId: "buySchoolButton" }
    ];

    upgrades.forEach(u => {
        const upgrade = model.data.upgrades.find(up => up.id === u.id);
        const button = document.getElementById(u.elementId);

        if (upgrade.maxLevel && upgrade.level >= upgrade.maxLevel) {
            button.innerText = `${upgrade.name}: Max Upgraded`;
            button.disabled = true;
            button.classList.add("disabled");
        } else {
            button.innerText = `Buy ${upgrade.name} (Cost: ${upgrade.cost})`;

            // 🔒 Check required upgrades
            const hasRequirements = !upgrade.requires || upgrade.requires.every(reqId => {
                const reqUpgrade = model.data.upgrades.find(u => u.id === reqId);
                return reqUpgrade && reqUpgrade.level > 0;
            });

            // ✅ Enable if affordable and unlocked
            if (model.data.clickCount >= upgrade.cost && hasRequirements && !upgrade.locked) {
                button.disabled = false;
                button.classList.remove("disabled");
            } else {
                button.disabled = true;
                button.classList.add("disabled");
            }
        }
    });
}
