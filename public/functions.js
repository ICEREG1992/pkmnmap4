tileSize = 1;
function disableItems() {
    var elements = document.getElementsByClassName('itemIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle('hidden');
    }
}
function disableHiddenItems() {
    var elements = document.getElementsByClassName('hiddenIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle('hidden');
    }
}
function disableBerryItems() {
    var elements = document.getElementsByClassName('berryIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle('hidden');
    }
}
function disableTMItems() {
    var elements = document.getElementsByClassName('tmIcon');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].classList.toggle('hidden');
    }
}
function setMorning() {
    mapTime = 0;
    info.update(oldtarget.feature.properties);
}
function setDay() {
    mapTime = 1;
    info.update(oldtarget.feature.properties);
}
function setNight() {
    mapTime = 2;
    info.update(oldtarget.feature.properties);
}
var content = document.getElementById('controls');
var swch = 0;
function changeMenu() {
    if (swch == 0) {
        content.style.display = 'flex';
        swch = 1;
    } else {
        content.style.display = '';
        swch = 0;
    }
}

function getCordfromLoc(lat, lng) {
    var tileSize = 0.249990234375;
    var latf = ((lat - 0.5) * tileSize - (tileSize / 2));
    var lngf = ((lng + 0.5) * tileSize + (tileSize / 2));
    return [lngf, latf];
}
  