var Overworld = L.tileLayer('Tilesets/Overworld/{z}/{y}/{x}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Original by: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> | Gen 4 Update by: <a target="_blank" href="https://github.com/ICEREG1992">William_Williams</a>',
    bounds: bounds,
    tileSize: 256
}).addTo(map);
var oldtarget;
var OverworldInfo = L.geoJson(OverworldVectorData, {
    style: style,
    onEachFeature: onEachFeature
});
var OverworldItemLayer = L.layerGroup();
var OverworldHiddenItemLayer = L.layerGroup();
var OverworldBerryItemLayer = L.layerGroup();
var OverworldEntranceItemLayer = L.layerGroup();
OverworldItemLayer.addTo(map);
OverworldHiddenItemLayer.addTo(map);
OverworldBerryItemLayer.addTo(map);
OverworldEntranceItemLayer.addTo(map);
OverworldInfo.addTo(map);
var currentMap = "Overworld";
function OverworldMarkerSet(lat, lng, description, iconimage, world) {
    latf = lat * tileSize - (tileSize / 2);
    lngf = lng * tileSize + (tileSize / 2);
    var OverworldMarker = L.marker([latf, lngf], {
        icon: iconimage,
        title: description
    });
    OverworldMarker.name = description;
    OverworldMarker.iconimage = iconimage;
    OverworldMarker.bindPopup(description);
    if (iconimage == hitemIcon) {
        OverworldHiddenItemLayer.addLayer(OverworldMarker);
    } else if (iconimage == itemIcon) {
        OverworldItemLayer.addLayer(OverworldMarker);
    } else if (iconimage == berryIcon) {
        OverworldBerryItemLayer.addLayer(OverworldMarker);
    } else if (iconimage == entrance) {
        OverworldEntranceItemLayer.addLayer(OverworldMarker);
    }
    if (iconimage == entrance) {
        locarray = [{
            description: {
                "lat": latf,
                "lng": lngf
            }
        }];
        LocationArray = LocationArray.concat(locarray);
    }
    OverworldMarker.on('click', Overworldf);
}
function Overworldf(e) {
    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });
    info.update();
    map.options.maxBounds = maxBounds;
    if (currentMap == "Fiery Path")
        map.setView([-11, 43], 5);
    if (currentMap == "Granite Cave")
        map.setView([-90, 11], 5);
    if (currentMap == "Jagged Pass")
        map.setView([-17, 41], 5);
    if (currentMap == "Meteor Falls")
        map.setView([-15, 7], 5);
    if (currentMap == "Mt Chimney")
        map.setView([-11, 43], 5);
    if (currentMap == "Mt Pyre")
        map.setView([-30, 109], 5);
    if (currentMap == "Petalburg Woods")
        map.setView([-55, 4], 5);
    if (currentMap == "Rusturf Tunnel")
        map.setView([-33, 27], 5);
    if (currentMap == "Safari Zone")
        map.setView([-22, 109], 5);
    if (currentMap == "Sootopolis")
        map.setView([-47, 150], 5);
    if (currentMap == "Victory Road")
        map.setView([-54, 194], 5);
    if (currentMap == "Meteor Falls")
        map.setView([-17, 8], 5);
    console.log('Exiting ' + currentMap);
    Overworld.addTo(map);
    OverworldItemLayer.addTo(map);
    OverworldHiddenItemLayer.addTo(map);
    OverworldBerryItemLayer.addTo(map);
    OverworldEntranceItemLayer.addTo(map);
    OverworldInfo.addTo(map);
    map.options.minZoom = 2;
}
// Verity Lakefront
markerSet(-452.12, 134.45, "TinyMushroom", hitemIcon, currentMap)
// Lake Verity
markerSet(-439.18, 107.45, "TM38 (Fire Blast)", hitemIcon, currentMap)
// Route 219
markerSet(-481, 223.5, "Zinc", hitemIcon, currentMap)
markerSet(-472, 217.5, "Antidote", itemIcon, currentMap)
// Route 202
markerSet(-419, 210.5, "Potion", itemIcon, currentMap)
// Jubilife City
markerSet(-410.25, 216.5, "Stardust", hitemIcon, currentMap)
markerSet(-387.5, 190.5, "Potion", itemIcon, currentMap)
// Route 218
markerSet(-374.12, 152.5, "X Accuracy", itemIcon, currentMap)
markerSet(-371, 165.5, "Rare Candy", itemIcon, currentMap)
markerSet(-382.62, 141.5, "Hyper Potion", itemIcon, currentMap)
markerSet(-377, 135.5, "Rawst Berry", berryIcon, currentMap)
markerSet(-377, 136.5, "Persim Berry", berryIcon, currentMap)
markerSet(-377, 137.5, "Figy Berry", berryIcon, currentMap)
markerSet(-377, 138.5, "Pinap Berry", berryIcon, currentMap)
// Canalave City
markerSet(-384.95, 82.45, "TM89 (U-Turn)", itemIcon, currentMap)
markerSet(-378.06, 84.45, "Big Pearl", hitemIcon, currentMap)
// Route 203
markerSet(-375.68, 259.50, "Poké Ball", itemIcon, currentMap)
markerSet(-371.18, 270.5, "Repel", itemIcon, currentMap)
markerSet(-376.82, 279.5, "X Defend", itemIcon, currentMap)
// Oreburgh City
markerSet(-393.25, 339.25, "Yellow Shard", itemIcon, currentMap)
markerSet(-392, 339.25, "Pearl", hitemIcon, currentMap)
markerSet(-394.5, 343.5, "Dire Hit", itemIcon, currentMap)
markerSet(-393.25, 342.25, "Heart Scale", hitemIcon, currentMap)
// Route 207
markerSet(-343.68, 339.18, "Poké Ball", itemIcon, currentMap)
markerSet(-343.75, 347.18, "Poké Ball", hitemIcon, currentMap)
markerSet(-356.4, 371.18, "Revive", itemIcon, currentMap)
markerSet(-346.10, 375.18, "Super Potion", itemIcon, currentMap)
markerSet(-352.12, 396.18, "Timer Ball", itemIcon, currentMap)
markerSet(-352.50, 383.18, "Iron", itemIcon, currentMap)
markerSet(-348, 361.25, "Rare Candy", hitemIcon, currentMap)
markerSet(-348.62, 386, "Revive", hitemIcon, currentMap)
markerSet(-343.75, 385.25, "Great Ball", hitemIcon, currentMap)
markerSet(-339.25, 338.12, "Oran Berry", berryIcon, currentMap)
markerSet(-339.25, 339.12, "Cheri Berry", berryIcon, currentMap)
markerSet(-339.25, 340.12, "Bluk Berry", berryIcon, currentMap)
markerSet(-339.25, 341.12, "Oran Berry", berryIcon, currentMap)
// Route 204
markerSet(-354.12, 225.5, "Paralyze Heal", itemIcon, currentMap)
markerSet(-349.5, 237.5, "HP Up", itemIcon, currentMap)
markerSet(-361.75, 210.5, "Sea Incense", itemIcon, currentMap)
markerSet(-330.62, 228.5, "Awakening", itemIcon, currentMap)
markerSet(-320.55, 210.5, "TM09 (Bullet Seed)", itemIcon, currentMap)
// Floaroma Town
markerSet(-296.5, 226.4, "Oran Berry", berryIcon, currentMap)
markerSet(-296.5, 230.4, "Cheri Berry", berryIcon, currentMap)
// Route 220
markerSet(-497.62, 228.45, "Max Repel", itemIcon, currentMap)
markerSet(-503.82, 219.45, "Splash Plate", itemIcon, currentMap)
markerSet(-507, 229.40, "Big Pearl", hitemIcon, currentMap)
markerSet(-503.35, 247.45, "Carbos", itemIcon, currentMap)
// Route 221
markerSet(-504.62, 356.45, "Carbos", hitemIcon, currentMap)
markerSet(-506.82, 343.4, "TM81 (X-Scissor)", itemIcon, currentMap)
markerSet(-506.12, 328.45, "Ultra Ball", hitemIcon, currentMap)
markerSet(-503.06, 320.45, "Max Revive", hitemIcon, currentMap)
markerSet(-507.68, 315.45, "Hyper Potion", hitemIcon, currentMap)
markerSet(-502.18, 304.45, "Ultra Ball", itemIcon, currentMap)
markerSet(-496.06, 287.45, "Protein", itemIcon, currentMap)
markerSet(-491.32, 298.45, "Pure Incense", itemIcon, currentMap)
markerSet(-487.62, 312.45, "Big Mushroom", hitemIcon, currentMap)
markerSet(-503.75, 326.45, "Leppa Berry", berryIcon, currentMap)
markerSet(-503.75, 327.45, "Pecha Berry", berryIcon, currentMap)
markerSet(-503.75, 328.45, "Mago Berry", berryIcon, currentMap)
markerSet(-503.75, 329.45, "Hondew Berry", berryIcon, currentMap)
// Route 205
markerSet(-287.55, 261.5, "X Sp. Def", itemIcon, currentMap)
markerSet(-271.12, 252.5, "Heal Ball", itemIcon, currentMap)
markerSet(-258.2, 251.5, "Repel", itemIcon, currentMap)
markerSet(-263.4, 267.5, "Super Potion", itemIcon, currentMap)
markerSet(-277.5, 260.5, "Stardust", hitemIcon, currentMap)
markerSet(-194.36, 333.5, "Super Potion", hitemIcon, currentMap)
markerSet(-210.55, 322.5, "Guard Spec.", itemIcon, currentMap)
markerSet(-302, 250.5, "Chesto Berry", berryIcon, currentMap)
markerSet(-302, 251.5, "Pecha Berry", berryIcon, currentMap)
markerSet(-268, 259.55, "Oran Berry", berryIcon, currentMap)
markerSet(-268, 260.55, "Pecha Berry", berryIcon, currentMap)
markerSet(-193.5, 325.5, "Cheri Berry", berryIcon, currentMap)
markerSet(-193.5, 326.5, "Pecha Berry", berryIcon, currentMap)
markerSet(-193.5, 327.5, "Oran Berry", berryIcon, currentMap)
markerSet(-193.5, 328.5, "Oran Berry", berryIcon, currentMap)
// Valley Windworks
markerSet(-303.62, 294.55, "Potion", itemIcon, currentMap)
markerSet(-295.12, 280.45, "Electirizer", itemIcon, currentMap)
markerSet(-296.32, 284.32, "Max Ether", hitemIcon, currentMap)
markerSet(-291.56, 290.45, "TM24 (Thunderbolt)", itemIcon, currentMap)
// Eterna Forest
markerSet(-233, 276.5, "Silver Powder", itemIcon, currentMap)
markerSet(-231.45, 291.5, "TM82 (Sleep Talk)", itemIcon, currentMap)
markerSet(-220.45, 278.5, "Razz Berry", berryIcon, currentMap)
markerSet(-220.45, 279.5, "Bluk Berry", berryIcon, currentMap)
markerSet(-220.45, 280.5, "Cheri Berry", berryIcon, currentMap)
markerSet(-220.45, 281.5, "Oran Berry", berryIcon, currentMap)
// Fuego Ironworks
markerSet(-252.7, 227.5, "Ultra Ball", hitemIcon, currentMap)
markerSet(-240.5, 225.5, "Big Mushroom", hitemIcon, currentMap)
// Eterna City
markerSet(-223.62, 365.18, "Super Potion", itemIcon, currentMap)
markerSet(-191.25, 375.18, "TM46 (Thief)", itemIcon, currentMap)
markerSet(-193.62, 375.18, "Draco Plate", hitemIcon, currentMap)
markerSet(-192.06, 395.18, "Moon Stone", hitemIcon, currentMap)
// Route 206
markerSet(-319.25, 361.12, "PP Up", hitemIcon, currentMap)
markerSet(-296.18, 361.18, "Ether", hitemIcon, currentMap)
markerSet(-300.25, 350.18, "Burn Heal", itemIcon, currentMap)
markerSet(-287.06, 343.18, "TinyMushroom", hitemIcon, currentMap)
markerSet(-283.92, 362.18, "Super Repel", itemIcon, currentMap)
markerSet(-277.82, 340.18, "Poison Barb", itemIcon, currentMap)
markerSet(-328.25, 343.25, "Razz Berry", berryIcon, currentMap)
markerSet(-328.25, 344.25, "Razz Berry", berryIcon, currentMap)