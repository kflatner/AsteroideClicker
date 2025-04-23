function buyUpgradeFromModel(id) {
    console.log("Clicked upgrade with ID:", id);
    const upgrade = model.data.upgrades.find(up => up.id === id);
    if (!upgrade) return;

    if (upgrade.id >= 101 && upgrade.id <= 104) {
        upgrade.locked = false;
    
        const nextSeal = model.data.upgrades.find(u => u.id === upgrade.id + 1);
        if (nextSeal && nextSeal.locked) {
            nextSeal.locked = false;
        }
    
        const button = document.getElementById(`sealButton${upgrade.id}`);
        if (button) {
            button.classList.add('bought-seal');
            button.disabled = true;
        }
    }

    // 🔒 Prevent buying if upgrade is locked
    if (upgrade.locked) {
        showInfo(`${upgrade.name} is not unlocked yet!`);
        return;
    }

    if (upgrade.maxLevel && upgrade.level >= upgrade.maxLevel) {
        showInfo(`Max level reached for ${upgrade.name}`);
        return;
    }
    

    
    if (model.data.clickCount >= upgrade.cost) {
        model.data.clickCount -= upgrade.cost;
        upgrade.level++;
        upgrade.cost *= 2;

        // 🛠️ Add auto-mining if applicable
        if (upgrade.interval && upgrade.multiplier) {
            setInterval(() => {
                model.data.clickCount += upgrade.multiplier;
                updateUI();
            }, upgrade.interval);
        }
       // Only run this block if NOT a SpaceLocation
if (upgrade.name !== 'SpaceLocation' && upgrade.unlockTargetId) {
    const target = document.getElementById(upgrade.unlockTargetId);
    if (target) {
        const realSrc = target.getAttribute('data-unlocked');

        if (realSrc) {
            target.src = realSrc + '?v=' + Date.now(); // ✅ safe to use
        } else {
            console.warn(`🟡 No data-unlocked on ${target.id} (maybe it's a location preview?)`);
        }

        target.style.display = 'inline-block';
        target.classList.add("building-effect");

        // Optional effects
        if (upgrade.name === 'SpaceBar') {
            target.classList.add("bar-effect");
        } else if (upgrade.name === 'SpaceSchool') {
            target.classList.add("school-effect");
        } else if (upgrade.name === 'SpaceFactory') {
            target.classList.add("factory-effect");
        } else if (upgrade.name === 'SpaceFarm') {
            target.classList.add("farm-effect");
        }
    }
}

        

     // 🌌 Special case: buying SpaceLocation reveals locked buildings
     if (upgrade.name === 'SpaceLocation') {
        if (upgrade.level === 1) {
            showLockedImage('spaceBar');
            unlockBuilding('spaceBar');
        }
        if (upgrade.level === 2) {
            showLockedImage('spaceFactory');
            unlockBuilding('spaceFactory');
        }
        if (upgrade.level === 3) {
            showLockedImage('spaceSchool');
            unlockBuilding('spaceSchool');
        }
        if (upgrade.level === 4) {
            showLockedImage('spaceFarm');
            unlockBuilding('spaceFarm');
        }
    }
   
    
    

        updateUI();
    } else {
        showInfo(`Not enough cash for ${upgrade.name}!`);
    }
}
//flytte disse 2 !

function saveGame() {
    localStorage.setItem('clickerGameSave', JSON.stringify(model));
  }

  function resetGame() {
    localStorage.removeItem('clickerGameSave');
    location.reload(); // Refresh page to restart with default
  }
  
  function initializeAutoUpgrades() {
    model.data.upgrades.forEach(upgrade => {
      if (upgrade.level > 0 && upgrade.interval && upgrade.multiplier) {
        setInterval(() => {
          model.data.clickCount += upgrade.multiplier;
          updateUI();
          saveGame();
        }, upgrade.interval);
      }
    });
  }
  
