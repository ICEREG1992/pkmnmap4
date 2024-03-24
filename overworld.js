var Overworld = L.tileLayer('tilesets/overworld/{z}/{y}/{x}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Original by <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - update by <a target="_blank" href="https://github.com/icereg1992">William_Williams<a>',
    bounds: bounds,
    tileSize: 256
}).addTo(map);
var oldtarget;
/*var OverworldInfo = L.geoJson(OverworldVectorData, {
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
OverworldInfo.addTo(map);*/
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
/*
L.markerSet(-220, 10.5, "Petalburg Woods", entrance, currentMap);
L.markerSet(-224, 32.5, "Petalburg Woods", entrance, currentMap);
L.markerSet(-212, 10.5, "Petalburg Woods", entrance, currentMap);
L.markerSet(-221, 778, "Victory Road", entrance, currentMap);
L.markerSet(-207, 778, "Victory Road", entrance, currentMap);
L.markerSet(-129, 87, "Rusturf Tunnel", entrance, currentMap);
L.markerSet(-131, 105, "Rusturf Tunnel", entrance, currentMap);
L.markerSet(-142, 128, "Rusturf Tunnel", entrance, currentMap);
L.markerSet(-358, 48, "Granite Cave", entrance, currentMap);
L.markerSet(-56, 171, "Fiery Path", entrance, currentMap);
L.markerSet(-30, 182, "Fiery Path", entrance, currentMap);
L.markerSet(-47, 188.5, "Mt Chimney", entrance, currentMap);
L.markerSet(-66, 166.5, "Jagged Pass", entrance, currentMap);
L.markerSet(-63, 48, "Meteor Falls", entrance, currentMap);
L.markerSet(-79, 27, "Meteor Falls", entrance, currentMap);
L.markerSet(-129, 442, "Mt Pyre", entrance, currentMap);
L.markerSet(-185.5, 602.5, "Sootopolis", entrance, currentMap);
L.markerSet(-85, 437, "Safari Zone", entrance, currentMap);
L.markerSet(-261, 51, "Rare Candy", hitemIcon, currentMap);
L.markerSet(-254, 16, "Antidote", hitemIcon, currentMap);
L.markerSet(-246, 16, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-237, 14, "Potion", hitemIcon, currentMap);
L.markerSet(-191, 3, "Pokeball", hitemIcon, currentMap);
L.markerSet(-188, 7, "Super Potion", hitemIcon, currentMap);
L.markerSet(-130, 62, "Super Potion", hitemIcon, currentMap);
L.markerSet(-318, 5, "Big Pearl", hitemIcon, currentMap);
L.markerSet(-330, 15, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-357, 68, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-354, 53, "Stardust", hitemIcon, currentMap);
L.markerSet(-353, 41, "Pokeball", hitemIcon, currentMap);
L.markerSet(-362, 208, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-343, 216, "Revive", hitemIcon, currentMap);
L.markerSet(-336, 213, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-330, 209, "Great Ball", hitemIcon, currentMap);
L.markerSet(-340, 228, "Ether", hitemIcon, currentMap);
L.markerSet(-325, 233, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-227, 237, "Full Heal", hitemIcon, currentMap);
L.markerSet(-134, 110, "BLACKGLASSES", hitemIcon, currentMap);
L.markerSet(-199, 235, "Revive", hitemIcon, currentMap);
L.markerSet(-205, 233, "Great Ball", hitemIcon, currentMap);
L.markerSet(-195, 204, "Pokeball", hitemIcon, currentMap);
L.markerSet(-159, 143, "Repel", hitemIcon, currentMap);
L.markerSet(-5, 122, "TM32", hitemIcon, currentMap);
L.markerSet(-3, 173, "NUGGET", hitemIcon, currentMap);
L.markerSet(-15, 82, "NUGGET", hitemIcon, currentMap);
L.markerSet(-30, 47, "REVIVE", hitemIcon, currentMap);
L.markerSet(-57, 60, "CARBOS", hitemIcon, currentMap);
L.markerSet(-91, 15, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-65, 144, "ICE HEAL", hitemIcon, currentMap);
L.markerSet(-55, 219, "Protein", hitemIcon, currentMap);
L.markerSet(-70, 226, "Stardust", hitemIcon, currentMap);
L.markerSet(-66, 235, "Rare Candy", hitemIcon, currentMap);
L.markerSet(-374, 178, "Rare Candy", hitemIcon, currentMap);
L.markerSet(-154, 252, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-153, 271, "Iron", hitemIcon, currentMap);
L.markerSet(-120, 306, "Full Heal", hitemIcon, currentMap);
L.markerSet(-82, 297, "Calcium", hitemIcon, currentMap);
L.markerSet(-63, 318, "Ultra Ball", hitemIcon, currentMap);
L.markerSet(-29, 300, "Max Ether", hitemIcon, currentMap);
L.markerSet(-1, 369, "Rare Candy", hitemIcon, currentMap);
L.markerSet(-11, 391, "Revive", hitemIcon, currentMap);
L.markerSet(-42, 384, "Zinc", hitemIcon, currentMap);
L.markerSet(-86, 360, "Rare Candy", hitemIcon, currentMap);
L.markerSet(-88, 468, "Max Revive", hitemIcon, currentMap);
L.markerSet(-85, 472, "Full Heal", hitemIcon, currentMap);
L.markerSet(-83, 458, "NUGGET", hitemIcon, currentMap);
L.markerSet(-90, 423, "HP UP", hitemIcon, currentMap);
L.markerSet(-101, 516, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-101, 544, "Pokeball", hitemIcon, currentMap);
L.markerSet(-77, 541, "PP UP", hitemIcon, currentMap);
L.markerSet(-155, 459, "PP UP", hitemIcon, currentMap);
L.markerSet(-158, 458, "Rare Candy", hitemIcon, currentMap);
L.markerSet(-155, 411, "Hyper Potion", hitemIcon, currentMap);
L.markerSet(-141, 395, "Super Repel", hitemIcon, currentMap);
L.markerSet(-141, 332, "Revive", hitemIcon, currentMap);
L.markerSet(-241, 697, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-229, 689, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-253, 671, "Heart Scale", hitemIcon, currentMap);
L.markerSet(-257, 81, "Potion", itemIcon, currentMap);
L.markerSet(-260, 43, "Ether", itemIcon, currentMap);
L.markerSet(-173, 36, "X Defend", itemIcon, currentMap);
L.markerSet(-127, 59, "Ether", itemIcon, currentMap);
L.markerSet(-128, 74, "Potion", itemIcon, currentMap);
L.markerSet(-133, 95, "X Special", itemIcon, currentMap);
L.markerSet(-138, 50, "Repel", itemIcon, currentMap);
L.markerSet(-234, 59, "Max Revive", itemIcon, currentMap);
L.markerSet(-235, 29, "Pokeball", itemIcon, currentMap);
L.markerSet(-204, 37, "X Accuracy", itemIcon, currentMap);
L.markerSet(-190, 5, "Potion", itemIcon, currentMap);
L.markerSet(-197, 39, "PP UP", itemIcon, currentMap);
L.markerSet(-102, 20, "Super Potion", itemIcon, currentMap);
L.markerSet(-109, 26, "PP UP", itemIcon, currentMap);
L.markerSet(-98, 31, "Great Ball", itemIcon, currentMap);
L.markerSet(-71, 23, "Iron", itemIcon, currentMap);
L.markerSet(-49, 18, "TM01", itemIcon, currentMap);
L.markerSet(-56, 12, "Heal Powder", itemIcon, currentMap);
L.markerSet(-37, 51, "Protein", itemIcon, currentMap);
L.markerSet(-19, 71, "EnergyPowder", itemIcon, currentMap);
L.markerSet(-6, 47, "Rare Candy", itemIcon, currentMap);
L.markerSet(-7, 153, "Max Ether", itemIcon, currentMap);
L.markerSet(-5, 179, "Super Repel", itemIcon, currentMap);
L.markerSet(-63, 174, "Nugget", itemIcon, currentMap);
L.markerSet(-54, 212, "Stardust", itemIcon, currentMap);
L.markerSet(-104, 233, "TM37", itemIcon, currentMap);
L.markerSet(-114, 203, "HP UP", itemIcon, currentMap);
L.markerSet(-118, 219, "Elixir", itemIcon, currentMap);
L.markerSet(-159, 156, "Great Ball", itemIcon, currentMap);
L.markerSet(-142, 149, "Revive", itemIcon, currentMap);
L.markerSet(-159, 228, "X Speed", itemIcon, currentMap);
L.markerSet(-227, 184, "PP UP", itemIcon, currentMap);
L.markerSet(-226, 194, "Guard Spec", itemIcon, currentMap);
L.markerSet(-229, 230, "Dire Hit", itemIcon, currentMap);
L.markerSet(-207, 226, "Rare Candy", itemIcon, currentMap);
L.markerSet(-198, 206, "Elixir", itemIcon, currentMap);
L.markerSet(-326, 225, "Potion", itemIcon, currentMap);
L.markerSet(-364, 182, "Star Piece", itemIcon, currentMap);
L.markerSet(-356, 29, "Protein", itemIcon, currentMap);
L.markerSet(-335, 8, "Iron", itemIcon, currentMap);
L.markerSet(-147, 309, "Hyper Potion", itemIcon, currentMap);
L.markerSet(-158, 347, "Ultra Ball", itemIcon, currentMap);
L.markerSet(-148, 351, "Calcium", itemIcon, currentMap);
L.markerSet(-155, 363, "PP UP", itemIcon, currentMap);
L.markerSet(-156, 377, "Revival Herb", itemIcon, currentMap);
L.markerSet(-149, 395, "Elixir", itemIcon, currentMap);
L.markerSet(-93, 438, "Zinc", itemIcon, currentMap);
L.markerSet(-117, 313, "Hyper Potion", itemIcon, currentMap);
L.markerSet(-121, 292, "Super Repel", itemIcon, currentMap);
L.markerSet(-96, 284, "Zinc", itemIcon, currentMap);
L.markerSet(-56, 283, "Hyper Potion", itemIcon, currentMap);
L.markerSet(-18, 288, "Rare Candy", itemIcon, currentMap);
L.markerSet(-5, 299, "Nugget", itemIcon, currentMap);
L.markerSet(-42, 304, "Elixir", itemIcon, currentMap);
L.markerSet(-53, 309, "Elixir", itemIcon, currentMap);
L.markerSet(-76, 305, "Leaf Stone", itemIcon, currentMap);
L.markerSet(-13, 382, "Nest Ball", itemIcon, currentMap);
L.markerSet(-33, 384, "Revive", itemIcon, currentMap);
L.markerSet(-55, 380, "Nugget", itemIcon, currentMap);
L.markerSet(-89, 367, "Full Heal", itemIcon, currentMap);
L.markerSet(-90, 460, "Revive", itemIcon, currentMap);
L.markerSet(-90, 455, "Carbos", itemIcon, currentMap);
L.markerSet(-106, 541, "Max Repel", itemIcon, currentMap);
L.markerSet(-135, 702, "Net Ball", itemIcon, currentMap);
L.markerSet(-179, 704, "Carbos", itemIcon, currentMap);
L.markerSet(-366, 227, "PP UP", itemIcon, currentMap);
L.markerSet(-77, 686, "Big Pearl", itemIcon, currentMap);
L.markerSet(-160, 653, "Rare Candy", itemIcon, currentMap);
L.markerSet(-179, 704, "Carbos", itemIcon, currentMap);
L.markerSet(-146, 654, "Zinc", itemIcon, currentMap);
L.markerSet(-277, 290, "Carbos", itemIcon, currentMap);
L.markerSet(-272, 373, "Big Pearl", itemIcon, currentMap);
L.markerSet(-287, 420, "Protein", itemIcon, currentMap);
L.markerSet(-272, 405, "Rare Candy", itemIcon, currentMap);
L.markerSet(-270, 328, "Star Piece", itemIcon, currentMap);
L.markerSet(-288, 368, "Max Revive", itemIcon, currentMap);
L.markerSet(-287, 262, "Star Piece", itemIcon, currentMap);
L.markerSet(-72, 588, "Red Shard", itemIcon, currentMap);
L.markerSet(-113, 591, "Blue Shard", itemIcon, currentMap);
L.markerSet(-141, 574, "Green Shard", itemIcon, currentMap);
L.markerSet(-71, 618, "Yellow Shard", itemIcon, currentMap);
L.markerSet(-47, 12, "2x Kelpsy Berry", berryIcon, currentMap);
L.markerSet(-47, 13, "2x Kelpsy Berry", berryIcon, currentMap);
L.markerSet(-47, 14, "2x Kelpsy Berry", berryIcon, currentMap);
L.markerSet(-244, 94, "2x Oran Berry", berryIcon, currentMap);
L.markerSet(-244, 95, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-188, 34, "2x Cheri Berry", berryIcon, currentMap);
L.markerSet(-188, 36, "2x Leppa Berry", berryIcon, currentMap);
L.markerSet(-107, 31, "2x Bulk Berry", berryIcon, currentMap);
L.markerSet(-106, 31, "2x Bulk Berry", berryIcon, currentMap);
L.markerSet(-43, 71, "2x Persim Berry", berryIcon, currentMap);
L.markerSet(-44, 71, "2x Persim Berry", berryIcon, currentMap);
L.markerSet(-45, 71, "2x Persim Berry", berryIcon, currentMap);
L.markerSet(-5, 218, "2x Oran Berry", berryIcon, currentMap);
L.markerSet(-5, 219, "2x Oran Berry", berryIcon, currentMap);
L.markerSet(-5, 222, "2x Razz Berry", berryIcon, currentMap);
L.markerSet(-5, 223, "2x Razz Berry", berryIcon, currentMap);
L.markerSet(-26, 187, "2x Rawst Berry", berryIcon, currentMap);
L.markerSet(-26, 188, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-26, 189, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-26, 190, "2x Rawst Berry", berryIcon, currentMap);
L.markerSet(-154, 181, "2x Wepear Berry", berryIcon, currentMap);
L.markerSet(-154, 182, "2x Wepear Berry", berryIcon, currentMap);
L.markerSet(-154, 183, "2x Wepear Berry", berryIcon, currentMap);
L.markerSet(-171, 205, "2x Nanab Berry", berryIcon, currentMap);
L.markerSet(-171, 206, "2x Nanab Berry", berryIcon, currentMap);
L.markerSet(-171, 207, "2x Nanab Berry", berryIcon, currentMap);
L.markerSet(-225, 179, "2x Leppa Berry", berryIcon, currentMap);
L.markerSet(-225, 178, "2x Cheri Berry", berryIcon, currentMap);
L.markerSet(-225, 180, "2x Cheri Berry", berryIcon, currentMap);
L.markerSet(-223, 22, "2x Oran Berry", berryIcon, currentMap);
L.markerSet(-223, 24, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-145, 275, "2x Sitrus Berry", berryIcon, currentMap);
L.markerSet(-145, 277, "2x Sitrus Berry", berryIcon, currentMap);
L.markerSet(-145, 331, "2x Pomeg Berry", berryIcon, currentMap);
L.markerSet(-145, 332, "2x Pomeg Berry", berryIcon, currentMap);
L.markerSet(-143, 331, "2x Pomeg Berry", berryIcon, currentMap);
L.markerSet(-143, 332, "2x Pomeg Berry", berryIcon, currentMap);
L.markerSet(-143, 334, "2x Grepa Berry", berryIcon, currentMap);
L.markerSet(-143, 335, "2x Grepa Berry", berryIcon, currentMap);
L.markerSet(-145, 334, "2x Grepa Berry", berryIcon, currentMap);
L.markerSet(-145, 335, "2x Grepa Berry", berryIcon, currentMap);
L.markerSet(-143, 337, "2x Qualot Berry", berryIcon, currentMap);
L.markerSet(-143, 338, "2x Qualot Berry", berryIcon, currentMap);
L.markerSet(-145, 337, "2x Qualot Berry", berryIcon, currentMap);
L.markerSet(-145, 338, "2x Qualot Berry", berryIcon, currentMap);
L.markerSet(-141, 401, "2x Leppa Berry", berryIcon, currentMap);
L.markerSet(-141, 403, "2x Leppa Berry", berryIcon, currentMap);
L.markerSet(-153, 429, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-153, 430, "2x Sitrus Berry", berryIcon, currentMap);
L.markerSet(-153, 431, "2x Rawst Berry", berryIcon, currentMap);
L.markerSet(-90, 309, "2x Sitrus Berry", berryIcon, currentMap);
L.markerSet(-90, 310, "2x Leppa Berry", berryIcon, currentMap);
L.markerSet(-23, 288, "2x Hondew Berry", berryIcon, currentMap);
L.markerSet(-23, 289, "2x Hondew Berry", berryIcon, currentMap);
L.markerSet(-5, 304, "2x Pomeg Berry", berryIcon, currentMap);
L.markerSet(-5, 305, "2x Pomeg Berry", berryIcon, currentMap);
L.markerSet(-5, 306, "2x Pomeg Berry", berryIcon, currentMap);
L.markerSet(-207, 3, "2x Cheri Berry", berryIcon, currentMap);
L.markerSet(-205, 3, "2x Oran Berry", berryIcon, currentMap);
L.markerSet(-24, 394, "2x Aspear Berry", berryIcon, currentMap);
L.markerSet(-24, 395, "2x Aspear Berry", berryIcon, currentMap);
L.markerSet(-24, 396, "2x Aspear Berry", berryIcon, currentMap);
L.markerSet(-79, 367, "2x Razz Berry", berryIcon, currentMap);
L.markerSet(-79, 366, "2x Nanab Berry", berryIcon, currentMap);
L.markerSet(-79, 365, "2x Pinap Berry", berryIcon, currentMap);
L.markerSet(-79, 364, "2x Wepear Berry", berryIcon, currentMap);
L.markerSet(-92, 369, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-92, 370, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-92, 371, "2x Pecha Berry", berryIcon, currentMap);
L.markerSet(-82, 414, "2x Persim Berry", berryIcon, currentMap);
L.markerSet(-82, 415, "2x Aspear Berry", berryIcon, currentMap);
L.markerSet(-82, 416, "2x Rawst Berry", berryIcon, currentMap);
L.markerSet(-82, 417, "2x Chesto Berry", berryIcon, currentMap);
L.markerSet(-94, 465, "2x Nanab Berry", berryIcon, currentMap);
L.markerSet(-94, 466, "2x Nanab Berry", berryIcon, currentMap);
L.markerSet(-123, 58, "2x Pinap Berry", berryIcon, currentMap);
L.markerSet(-123, 61, "2x Pinap Berry", berryIcon, currentMap);
L.markerSet(-123, 59, "2x Chesto Berry", berryIcon, currentMap);
L.markerSet(-123, 60, "2x Chesto Berry", berryIcon, currentMap); */