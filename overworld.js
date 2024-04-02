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
// Route 211
markerSet(-208.45, 416.18, "TM12 (Taunt)", itemIcon, currentMap)
markerSet(-195.15, 403.18, "Great Ball", hitemIcon, currentMap)
markerSet(-189.5, 443.18, "TM29 (Psychic)", itemIcon, currentMap)
markerSet(-208.92, 452.12, "Carbos", itemIcon, currentMap)
markerSet(-189.5, 450.25, "Calcium", hitemIcon, currentMap)
markerSet(-200.5, 454.25, "Pecha Berry", berryIcon, currentMap)
markerSet(-200.5, 455.25, "Aspear Berry", berryIcon, currentMap)
markerSet(-200.5, 456.25, "Iapapa Berry", berryIcon, currentMap)
markerSet(-200.5, 457.25, "Grepa Berry", berryIcon, currentMap)
// Celestic Town
markerSet(-208.06, 488.12, "Dragon Fang", itemIcon, currentMap)
markerSet(-200.45, 476.12, "King's Rock", hitemIcon, currentMap)
// Route 210 (TODO: BERRIES)
markerSet(-261, 573.08, "Super Repel", itemIcon, currentMap)
markerSet(-267.5, 584.12, "Rare Candy", hitemIcon, currentMap)
markerSet(-245.55, 565.06, "Max Repel", itemIcon, currentMap)
markerSet(-241.82, 568.12, "Full Heal", hitemIcon, currentMap)
markerSet(-233.32, 574.12, "Ultra Ball", hitemIcon, currentMap)
markerSet(-235.42, 581.12, "Hyper Potion", itemIcon, currentMap)
markerSet(-239.55, 585.12, "Hyper Potion", hitemIcon, currentMap)
markerSet(-232.62, 592.12, "Ultra Ball", hitemIcon, currentMap)
markerSet(-220.82, 594.12, "Nest Ball", itemIcon, currentMap)
markerSet(-213.12, 570.16, "Red Shard", itemIcon, currentMap)
markerSet(-196.82, 545.16, "Meadow Plate", hitemIcon, currentMap)
markerSet(-210.82, 516.16, "Wave Incense", itemIcon, currentMap)
markerSet(-211, 546.32, "Smoke Ball", itemIcon, currentMap)
markerSet(-212.36, 512.16, "TM30 (Shadow Ball)", itemIcon, currentMap)
markerSet(-205.22, 566.16, "Shiny Stone", hitemIcon, currentMap)
markerSet(-205.55, 581.12, "Zinc", itemIcon, currentMap)
// Solaceon Town (TODO: BERRIES)
markerSet(-293.32, 613.12, "Big Mushroom", hitemIcon, currentMap)
markerSet(-310.35, 603.06, "PP Up", itemIcon, currentMap)
markerSet(-302.06, 613.06, "Rare Candy", itemIcon, currentMap)
// Route 209 (TODO: BERRIES)
markerSet(-350.45, 541.06, "Great Ball", hitemIcon, currentMap)
markerSet(-345.75, 546.06, "Great Ball", itemIcon, currentMap)
markerSet(-356.55, 558.06, "Super Repel", hitemIcon, currentMap)
markerSet(-355, 576.18, "Hyper Potion", itemIcon, currentMap)
markerSet(-359.62, 587.25, "TM19 (Giga Drain)", itemIcon, currentMap)
markerSet(-347.18, 569.36, "Revive", hitemIcon, currentMap)
markerSet(-343.18, 575.12, "Ether", itemIcon, currentMap)
markerSet(-335.82, 584.18, "Stardust", hitemIcon, currentMap)
markerSet(-319.62, 567.12, "Calcium", itemIcon, currentMap)
markerSet(-333.36, 591.25, "TM47 (Steel Wing)", itemIcon, currentMap)
// Hearthome City 
markerSet(-324.82, 489.24, "Big Mushroom", hitemIcon, currentMap)
// Route 208 (TODO: BERRIES)
markerSet(-363.55, 447.06, "TinyMushroom", hitemIcon, currentMap)
markerSet(-349.24, 435, "Ether", itemIcon, currentMap)
markerSet(-355, 418, "Great Ball", itemIcon, currentMap)
markerSet(-349.32, 408, "Star Piece", hitemIcon, currentMap)
markerSet(-340.24, 420, "Carbos", itemIcon, currentMap)
// Route 212 (TODO: BERRIES)
markerSet(-390.45, 480, "Iron", itemIcon, currentMap)
markerSet(-398.95, 469, "TM11 (Sunny Day)", itemIcon, currentMap)
markerSet(-409.75, 475, "Rose Incense", itemIcon, currentMap)
markerSet(-418.82, 494, "Ultra Ball", hitemIcon, currentMap)
markerSet(-399.45, 485, "Pearl", hitemIcon, currentMap)
markerSet(-392, 495, "Green Shard", itemIcon, currentMap)
markerSet(-432.95, 478, "Elixir", itemIcon, currentMap)
markerSet(-448, 471.12, "Blue Shard", itemIcon, currentMap)
markerSet(-463.62, 474, "Full Heal", itemIcon, currentMap)
markerSet(-457.32, 494, "TM84 (Poison Jab)", itemIcon, currentMap)
markerSet(-451.45, 526, "TM62 (Silver Wind)", itemIcon, currentMap)
markerSet(-461.85, 512, "Max Ether", hitemIcon, currentMap)
markerSet(-459.12, 490, "Big Mushroom", hitemIcon, currentMap)
markerSet(-453.55, 546, "Max Repel", hitemIcon, currentMap)
markerSet(-455.12, 550, "Elixir", itemIcon, currentMap)
markerSet(-456.62, 553, "Full Heal", hitemIcon, currentMap)
markerSet(-461.32, 552, "Rare Candy", hitemIcon, currentMap)
markerSet(-465.12, 565.92, "TM06 (Toxic)", itemIcon, currentMap)
markerSet(-451.12, 577, "Revive", itemIcon, currentMap)
markerSet(-447.40, 590, "Hyper Potion", hitemIcon, currentMap)
markerSet(-444.32, 589, "Ultra Ball", hitemIcon, currentMap)
markerSet(-444.32, 580, "Dawn Stone", hitemIcon, currentMap)
markerSet(-444.32, 563.92, "Hyper Potion", itemIcon, currentMap)
markerSet(-449.55, 541, "Zinc", itemIcon, currentMap)