var Overworld = L.tileLayer('Tilesets/Overworld/{z}/{y}/{x}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Maker: <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - Contact: <a target="_blank" href="mailto:admin@oceanicweb.com.au">email</a>',
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
markerSet(-452.25, 134.5, "TinyMushroom", hitemIcon, currentMap)
// Lake Verity
markerSet(-439.25, 107.5, "TM38 (Fire Blast)", hitemIcon, currentMap)
// Route 219
markerSet(-481, 223.5, "Zinc", hitemIcon, currentMap)
markerSet(-472, 217.5, "Antidote", itemIcon, currentMap)
// Route 202
markerSet(-419, 210.5, "Potion", itemIcon, currentMap)
// Jubilife City
markerSet(-410.25, 216.5, "Stardust", hitemIcon, currentMap)
markerSet(-387.5, 190.5, "Potion", itemIcon, currentMap)
// Route 218
markerSet(-374, 152.5, "X Accuracy", itemIcon, currentMap)
markerSet(-371, 165.5, "Rare Candy", itemIcon, currentMap)
markerSet(-382.5, 141.5, "Hyper Potion", itemIcon, currentMap)
markerSet(-377, 135.5, "Rawst Berry", berryIcon, currentMap)
markerSet(-377, 136.5, "Persim Berry", berryIcon, currentMap)
markerSet(-377, 137.5, "Figy Berry", berryIcon, currentMap)
markerSet(-377, 138.5, "Pinap Berry", berryIcon, currentMap)
// Canalave City
markerSet(-385, 82.5, "TM89 (U-Turn)", itemIcon, currentMap)
markerSet(-378, 84.5, "Big Pearl", hitemIcon, currentMap)