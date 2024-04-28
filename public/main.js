//var tileX = -128;
//var tileY = 256;
//var bounds = L.latLngBounds(L.latLng(tileX, 0), L.latLng(0, tileY));
//var maxBounds = L.latLngBounds(L.latLng(tileX - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, tileY + outOfBoundsInt));
const outOfBoundsInt = 20;
var mapTime = 1;
var map = L.map('map', {
    preferCanvas: true,
    // minZoom: 2,
    // maxZoom: 7,
    // center: [-64, 128],
    // zoom: 2,
    // maxBounds: maxBounds,
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

// create bottom-left pokemon info box and add to map
var info = L.control({
    position: 'bottomleft'
});
info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function(props) {
    this._div.innerHTML = (props ? '<div class="info-header">' + '<h4>' + props.name + '</h4>' + '<button onclick="info.update()">close</button>' + '</div>' + outpkmn(props) : 'Click on a location');
};
info.addTo(map);

// debug function to print coords to console
map.on('click', function (e) {
    var coord = e.latlng;
    console.log(e)
    var lat = (coord.lat / tileSize) + 1;
    var lng = coord.lng / tileSize;
    lat = Math.round(lat * 16) / 16;
    lng  = Math.round(lng * 16) / 16;
    console.log('Tile Location: ' + lat + ', ' + lng);
    console.log(
    'Map Location: ' + Math.floor(lat * tileSize) + ', ' + Math.floor(lng * tileSize)
    );
});

loadMap("Overworld");

function loadMap(mapName) {
    currentMap = mapName;
    // remove all existing layers from the map
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    // clear the pokemon info box
    info.update();
    // set viewport options
    selectedMap = maps[mapName];
    map.options.minZoom = selectedMap.minZoom;
    map.options.maxZoom = selectedMap.maxZoom;
    map.options.maxBounds = L.latLngBounds(L.latLng(selectedMap.bounds[0] - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, selectedMap.bounds[1] + outOfBoundsInt));
    map.setView([selectedMap.bounds[0]/2, selectedMap.bounds[1]/2], selectedMap.zoom);
    // create tile and vector layers
    var tileLayer = L.tileLayer('Tilesets/' + selectedMap.shortname + '/{z}/{y}/{x}.png', {
        tms: false,
        reuseTiles: true,
        attribution: 'Original by <a target="_blank" href="http://www.jaxsonkeenes.com">Jaxson Keenes</a> | Gen 4 Update by <a target="_blank" href="https://github.com/ICEREG1992/pkmnmap4">William_Williams</a>',
        bounds: L.latLngBounds(L.latLng(selectedMap.bounds[0], 0), L.latLng(0, selectedMap.bounds[1])),
        tileSize: 256
    });
    var vectorLayer = L.geoJson(selectedMap.vector, {
        style: style,
        onEachFeature: onEachFeature
    });
    console.log(mapName);
    // add layers to map
    tileLayer.addTo(map);
    vectorLayer.addTo(map);
    selectedMap?.itemLayer?.addTo(map);
    selectedMap?.hiddenLayer?.addTo(map);
    selectedMap?.berryLayer?.addTo(map);
    selectedMap?.tmLayer?.addTo(map);
    selectedMap?.entranceLayer?.addTo(map);
}

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

function style(feature) {
    return {
        weight: 2,
        opacity: 0,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0
    };
}

function updateFeature(e) {
    // if something's already been clicked, set style so it looks unclicked
    if (null != oldtarget) {
        oldtarget.setStyle({opacity: 0});
    }
    // update infobox, set style
    var layer = e.target;
    info.update(layer.feature.properties);
    layer.setStyle({
        opacity: 1,
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    // remember this for next time
    oldtarget = e.target;
}

function onEachFeature(feature, layer) {
    layer.on({
        click: updateFeature,
    });
}