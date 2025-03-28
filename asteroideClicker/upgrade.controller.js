function buyUpgradeFromModel(id) {
    const upgrade = model.data.upgrades.find(upgrade => upgrade.id === id);
    if (!upgrade) return;

    if (model.data.clickCount >= upgrade.cost) {
        model.data.clickCount -= upgrade.cost;

        upgrade.level++;

        
      

        
        setInterval(() => {
            model.data.clickCount += upgrade.multiplier;
            updateUI();
        }, upgrade.interval);

        upgrade.cost *= 2;
      

        updateUI();
    } else {
        showInfo(`Not enough cash for ${upgrade.name}!`);
    }
}
