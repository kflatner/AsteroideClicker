function updateSealButtons() {
    const sealIds = [101, 102, 103, 104];

    sealIds.forEach((id, index) => {
        const seal = model.data.upgrades.find(up => up.id === id);
        const button = document.getElementById(`seal${index + 1}Button`);
        if (!seal || !button) return;

        const canAfford = model.data.clickCount >= seal.cost;
        const previousUnlocked = index === 0 || model.data.upgrades.find(up => up.id === sealIds[index - 1]).level > 0;

        button.disabled = !canAfford || !previousUnlocked || !seal.locked === false;

        if (!seal.locked) {
            button.innerText = `${seal.name} (✔ Bought)`;
            button.classList.add("maxed");
        } else {
            button.innerText = `Buy ${seal.name} (${seal.cost})`;
        }
    });
}

function buySeal(id) {
    const seal = model.data.seals.find(s => s.id === id);
    if (!seal) return;
  
    if (seal.locked) {
      showInfo(`${seal.name} is not unlocked yet`);
      return;
    }
  
    if (model.data.clickCount >= seal.cost) {
      model.data.clickCount -= seal.cost;
      seal.locked = true;
  
      const button = document.getElementById(`sealButton${seal.id}`);
      if (button) {
        button.classList.add("bought-seal");
        button.disabled = true;
      }
  
      // Unlock next seal
      const nextSeal = model.data.seals.find(s => s.id === id + 1);
      if (nextSeal) nextSeal.locked = false;
  
      updateUI();
      saveGame();
    } else {
      showInfo(`Not enough cash for ${seal.name}`);
      saveGame();
    }
  }
  
