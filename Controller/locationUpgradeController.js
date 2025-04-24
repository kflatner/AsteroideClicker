function unlockBuilding(id) {
    const target = document.getElementById(id);
    if (target) {
        const realUpgrade = model.data.upgrades.find(u => u.unlockTargetId === id);
        if (realUpgrade) {
            realUpgrade.locked = false; 
            saveGame(); 
        }
    }
}


function showLockedImage(id) {
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'inline-block';
        saveGame(); 
    }
}
function showInfo(text) {
    const box = document.getElementById("infoBox");
    if (box) {
        box.innerText = text;
    } else {
        console.warn("infoBox not found:", text);
    }
}

function hideInfo() {
    const box = document.getElementById("infoBox");
    if (box) {
        box.innerText = "";
    }
}
function applyUnlockVisuals() {
    model.data.upgrades.forEach(upgrade => {
      if (upgrade.unlockTargetId && upgrade.level > 0) {
        const target = document.getElementById(upgrade.unlockTargetId);
        if (target) {
          const realSrc = target.getAttribute('data-unlocked');
          if (realSrc) {
            target.src = realSrc + '?v=' + Date.now();
          }
          target.style.display = 'inline-block';
          target.classList.add('building-effect');
        }
      }
    });
  }
  