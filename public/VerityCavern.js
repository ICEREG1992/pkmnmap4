var VerityCavern = L.tileLayer( 'Tilesets/VerityCavern/{z}/{y}/{x}.png', {
  tms: false,
  reuseTiles: true,
  attribution: 'Original by <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> | Gen 4 Update by <a target="_blank" href="https://github.com/ICEREG1992/pkmnmap4">William_Williams</a>',
  bounds: L.latLngBounds(L.latLng(-128, 0), L.latLng(0, 128)),
  tileSize: 256
});
var VerityCavernInfo = L.geoJson(VerityCavernVectorData, {
  style: style,
  onEachFeature: onEachFeature
});
var VerityCavernItemLayer = L.layerGroup();
var VerityCavernHiddenItemLayer = L.layerGroup();
var VerityCavernEntranceItemLayer = L.layerGroup();
var currentMap = 'Verity Cavern';
function VerityCavernf(e) {
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });
  info.update();
  map.options.minZoom = 1;
  map.options.maxZoom = 3;
  VerityCavern.addTo(map);
  VerityCavernInfo.addTo(map);
  VerityCavernItemLayer.addTo(map);
  VerityCavernHiddenItemLayer.addTo(map);
  VerityCavernEntranceItemLayer.addTo(map);
  currentMap = 'Verity Cavern';
  console.log(e.target.name);
  map.options.maxBounds = L.latLngBounds(L.latLng(-128 - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, 128 + outOfBoundsInt));
  map.setView([-64, 64], 2);
}
markerSet(-442, 256, 'Overworld', entrance, currentMap);