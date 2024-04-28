var itemIcon = L.divIcon({
    className: 'itemIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var hitemIcon = L.divIcon({
    className: 'hitemIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var tmitemIcon = L.divIcon({
    className: 'tmitemIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var berryIcon = L.divIcon({
    className: 'berryIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var entrance = L.divIcon({
    className: 'entrance',
    iconSize: null,
    popupAnchor: [0, -10]
});
var currentMap = "Overworld";
var tileSize = .25;
function markerSet(lat, lng, description, iconimage, world) {
    latf = lat * tileSize - (tileSize / 2);
    lngf = lng * tileSize + (tileSize / 2);
    var marker = L.marker([latf, lngf], {
        icon: iconimage,
        title: description
    });
    marker.name = description;
    marker.iconimage = iconimage;
    marker.bindPopup(description);
    if (world == "Overworld") {
        if (iconimage == hitemIcon) {
            OverworldHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            OverworldItemLayer.addLayer(marker);
        } else if (iconimage == berryIcon) {
            OverworldBerryItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            OverworldEntranceItemLayer.addLayer(marker);
        } else if (iconimage == tmitemIcon) {
            OverworldTMItemLayer.addLayer(marker);
        }
    } else if (world == "Verity Cavern") {
        if (iconimage == hitemIcon) {
            VerityCavernHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            VerityCavernItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            VerityCavernEntranceItemLayer.addLayer(marker);
        } else if (iconimage == tmitemIcon) {
            VerityCavernTMItemLayer.addLayer(marker);
        }
    } else if (world == "Victory Road") {
        if (iconimage == hitemIcon) {
            VictoryRoadHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            VictoryRoadItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            VictoryRoadEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Rusturf Tunnel") {
        if (iconimage == hitemIcon) {
            RusturfTunnelHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            RusturfTunnelItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            RusturfTunnelEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Granite Cave") {
        if (iconimage == hitemIcon) {
            GraniteCaveHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            GraniteCaveItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            GraniteCaveEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Jagged Pass") {
        if (iconimage == hitemIcon) {
            JaggedPassHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            JaggedPassItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            JaggedPassEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Fiery Path") {
        if (iconimage == hitemIcon) {
            FieryPathHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            FieryPathItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            FieryPathEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Mt Chimney") {
        if (iconimage == hitemIcon) {
            MtChimneyHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            MtChimneyItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            MtChimneyEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Meteor Falls") {
        if (iconimage == hitemIcon) {
            MeteorFallsHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            MeteorFallsItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            MeteorFallsEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Mt Pyre") {
        if (iconimage == hitemIcon) {
            MtPyreHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            MtPyreItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            MtPyreEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Sootopolis") {
        if (iconimage == hitemIcon) {
            SootopolisHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            SootopolisItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            SootopolisEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Underwater") {
        if (iconimage == hitemIcon) {
            UnderwaterHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            UnderwaterItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            UnderwaterEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Magma Hideout") {
        if (iconimage == hitemIcon) {
            MagmaHideoutHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            MagmaHideoutItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            MagmaHideoutEntranceItemLayer.addLayer(marker);
        }
    } else if (world == "Safari Zone") {
        if (iconimage == hitemIcon) {
            SafariZoneHiddenItemLayer.addLayer(marker);
        } else if (iconimage == itemIcon) {
            SafariZoneItemLayer.addLayer(marker);
        } else if (iconimage == entrance) {
            SafariZoneEntranceItemLayer.addLayer(marker);
        }
    }
    marker.on('click', onClickEvent);
}
function onClickEvent(e) {
    if (e.target.name == "Overworld") {
        Overworldf(e);
    } else if (e.target.name == "Verity Cavern") {
        VerityCavernf(e);
    } else if (e.target.name == "Victory Road") {
        VictoryRoadf(e);
    } else if (e.target.name == "Rusturf Tunnel") {
        RusturfTunnelf(e);
    } else if (e.target.name == "Granite Cave") {
        GraniteCavef(e);
    } else if (e.target.name == "Jagged Pass") {
        JaggedPassf(e);
    } else if (e.target.name == "Fiery Path") {
        FieryPathf(e);
    } else if (e.target.name == "Mt Chimney") {
        MtChimneyf(e);
    } else if (e.target.name == "Meteor Falls") {
        MeteorFallsf(e);
    } else if (e.target.name == "Mt Pyre") {
        MtPyref(e);
    } else if (e.target.name == "Sootopolis") {
        Sootopolisf(e);
    } else if (e.target.name == "Magma Hideout") {
        MagmaHideoutf(e);
    } else if (e.target.name == "Safari Zone") {
        SafariZonef(e);
    }
}
