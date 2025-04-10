function locationUpgradeView() {
    const bottomMenu = document.getElementById("bottomMenu");
    bottomMenu.innerHTML = '';

    model.data.upgrades.forEach(upgrade => {
        if (upgrade.level > 0) {
            bottomMenu.innerHTML += `
                <div class="upgrade-item">
                    <img src="${upgrade.image}" alt="${upgrade.name}" width="40">
                    ${upgrade.name}: ${upgrade.level}
                </div>
            `;
        }
    });
}