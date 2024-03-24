var tileX = -180;
var tileY = 240;
var bounds = L.latLngBounds(L.latLng(tileX, 0), L.latLng(0, tileY));
var outOfBoundsInt = 20;
var maxBounds = L.latLngBounds(L.latLng(tileX - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, tileY + outOfBoundsInt));
var map = L.map('map', {
    preferCanvas: true,
    minZoom: 2,
    maxZoom: 7,
    center: [-90, 120],
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
var Grid = L.tileLayer('./tilesets/grid/{z}/{y}/tile{x}.png', {
    tms: false,
    reuseTiles: true,
    attribution: 'Original by <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> - update by <a target="_blank" href="https://github.com/icereg1992">William_Williams<a>',
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
};

function pkmnListOutput(str, arr, title, perc) {
    if (arr.length != 0) {
        str = str + '<div class="pkmn-list-row">' + title + '</div>';
        for (var i = 0; i < arr.length; i++) {
            str = str + '' +
                '<div class="pkmn-list-column">' + arr[i].name + '</div>' +
                '<div class="pkmn-list-column">' + arr[i].area + '</div>' +
                '<div class="pkmn-list-column">' + arr[i].levels + '</div>' +
                '<div class="pkmn-list-column">' + arr[i].rate + perc + '</div>';
        }
    }
    return str;
}

function outpkmn(props) {
    var arr = props.Pokémon;
    var nodata = false;
    var arrayPkmn = [];
    var arrayPkmn2 = [];
    var arrayPkmnlength = [];
    str = '<div id="pkmn-list">';
    str = str +
        '<div class="pkmn-list-column">' +
        'Name' +
        '</div><div class="pkmn-list-column">' +
        'Method' +
        '</div><div class="pkmn-list-column">' +
        'Levels' +
        '</div><div class="pkmn-list-column">' +
        'Rate' +
        '</div>';
    for (const [key, value] of Object.entries(arr)) {
        arrayPkmn[key] = value;
        arrayPkmn2.push(key);
        arrayPkmnlength++;
    }
    for (var ia = 0; ia < arrayPkmnlength; ia++) {
        var pk = [];
        arr2 = arr[arrayPkmn[ia]];
        str = str + '<div class="pkmn-list-row">' + arrayPkmn2[ia] + '</div>';
        for (const [key, value] of Object.entries(arrayPkmn[arrayPkmn2[ia]])) {
            pk[key] = value;
        }
        for (var i = 0; i < (pk.length); i++) {
            str = str + '' +
                '<div class="pkmn-list-column">' + pk[i].name + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].area + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].levels + '</div>' +
                '<div class="pkmn-list-column">' + pk[i].rate + '</div>';
        }
    }
    str = str + '</div>';
    if (arrayPkmn2.length === 0) {
        str = '<div class="pkmn-nodata">No Data Available</div>';
    }
    return str;
}
info.update = function(props) {
    this._div.innerHTML = (props ? '<div class="info-header">' +
        '<h4>' + props.name + '</h4>' +
        '<button onclick="info.update()">close</button>' +
        '</div>' +
        outpkmn(props) : 'Click on a location');
};
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