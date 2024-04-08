var tileX = -128;
var tileY = 256;
var bounds = L.latLngBounds(L.latLng(tileX, 0), L.latLng(0, tileY));
var outOfBoundsInt = 20;
var maxBounds = L.latLngBounds(L.latLng(tileX - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, tileY + outOfBoundsInt));
var mapTime = 1;
var map = L.map('map', {
    preferCanvas: true,
    minZoom: 2,
    maxZoom: 7,
    center: [-64, 128],
    zoom: 2,
    maxBounds: maxBounds,
    maxBoundsViscosity: 1.0,
    doubleClickZoom: false,
    crs: L.CRS.Simple,
    detectRetina: true,
    markerZoomAnimation: true,
    zoomControl: false
});
new L.Control.Zoom({
    position: 'bottomright'
}).addTo(map);
var LocationArray = [];
var Grid = L.tileLayer('Tilesets/Grid/{z}/{x}/{y}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Original by <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> | Gen 4 Update by <a target="_blank" href="https://github.com/ICEREG1992">William_Williams</a>',
    bounds: bounds,
    tileSize: 256
});
var info = L.control({
    position: 'bottomleft'
});
info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
}
;
function pkmnListOutput(str, arr, title, perc) {
    if (arr.length != 0) {
        str = str + '<div class="pkmn-list-row">' + title + '</div>';
        for (var i = 0; i < arr.length; i++) {
            str = str + '' + '<div class="pkmn-list-column">' + arr[i].name + '</div>' + '<div class="pkmn-list-column">' + arr[i].area + '</div>' + '<div class="pkmn-list-column">' + arr[i].levels + '</div>' + '<div class="pkmn-list-column">' + arr[i].rate + perc + '</div>';
        }
    }
    return str;
}
function outpkmn(props) {
    const pokemonData = props.Pokémon;
    var str = '<div id="pkmn-list">';
    str += '<div class="pkmn-list-column">Name</div><div class="pkmn-list-column">Method</div><div class="pkmn-list-column">Levels</div><div class="pkmn-list-column">Rate</div>';

    if (!pokemonData || Object.keys(pokemonData).length === 0) {
        return '<div class="pkmn-nodata">No Data Available</div>';
    }

    for (const [pokemonName, pokemonAttributes] of Object.entries(pokemonData)) {
        str += `<div class="pkmn-list-row">${pokemonName}</div>`;
        
        for (const attribute of pokemonAttributes) {
            var useMapTimeLevels = false;
            var useMapTimeRate = false;

            var levels = attribute.levels;
            var rate = attribute.rate;
            
            if (Array.isArray(levels)) {
                levels = levels[mapTime];
                useMapTimeLevels = true;
            }

            if (Array.isArray(rate)) {
                rate = rate[mapTime];
                useMapTimeRate = true;
            }
            
            str += `<div class="pkmn-list-column">${attribute.name}</div>
                    <div class="pkmn-list-column">${attribute.area}</div>`
            var levelsdiv = document.createElement('div')
            levelsdiv.className = useMapTimeLevels ? `pkmn-list-column time${mapTime}` : "pkmn-list-column"
            levelsdiv.innerHTML = levels
            str += levelsdiv.outerHTML
            var ratediv = document.createElement('div')
            ratediv.className = useMapTimeRate ? `pkmn-list-column time${mapTime}` : "pkmn-list-column"
            ratediv.innerHTML = rate
            str += ratediv.outerHTML
        }
    }

    str += '</div>';
    return str;
}
info.update = function(props) {
    this._div.innerHTML = (props ? '<div class="info-header">' + '<h4>' + props.name + '</h4>' + '<button onclick="info.update()">close</button>' + '</div>' + outpkmn(props) : 'Click on a location');
}
;
info.addTo(map);
function style(feature) {
    return {
        weight: 1,
        opacity: 0,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0
    };
}
function updateFeature(e) {
    OverworldInfo.resetStyle(oldtarget);
    info.update();
    var layer = e.target;
    info.update(layer.feature.properties);
    layer.setStyle({
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    oldtarget = e.target;
}
function onEachFeature(feature, layer) {
    layer.on({
        click: updateFeature,
    });
}
function getCordfromLoc(lat, lng) {
    var tileSize = 0.249990234375;
    var latf = ((lat - 0.5) * tileSize - (tileSize / 2));
    var lngf = ((lng + 0.5) * tileSize + (tileSize / 2));
    return [lngf, latf];
}
function setMorning() {
    mapTime = 0;
    info.update();
}
function setDay() {
    mapTime = 1;
    info.update();
}
function setNight() {
    mapTime = 2;
    info.update();
}