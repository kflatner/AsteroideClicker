function unlockBuilding(id) {
    const target = document.getElementById(id);
    if (target) {
        const realUpgrade = model.data.upgrades.find(u => u.unlockTargetId === id);
        if (realUpgrade) {
            realUpgrade.locked = false; // ✅ this unlocks it
        }
    }
}


function showLockedImage(id) {
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'inline-block';
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