var maps = {
    "Overworld": {
        "shortname": "overworld",
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 7,
        "bounds": [-128, 256],
        "vector": overworldRegions
    },
    "Verity Cavern": {
        "shortname": 'veritycavern',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 128],
        "vector": verityCavernRegions
    },
    "Oreburgh Gate": {
        "shortname": 'oreburghgate',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": oreburghGateRegions
    },
    "Oreburgh Mine": {
        "shortname": 'oreburghmine',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": oreburghMineRegions
    },
    "Ravaged Path": {
        "shortname": 'ravagedpath',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-256, 128],
        "vector": ravagedPathRegions
    },
    "Floaroma Meadow": {
        "shortname": 'floaromameadow',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": floaromaMeadowRegions
    },
    "Valley Windworks": {
        "shortname": 'valleywindworks',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 2,
        "bounds": [-128, 256],
        "vector": valleyWindworksRegions
    },
    "Eterna Forest": {
        "shortname": 'eternaforest',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 5,
        "bounds": [-128, 128],
        "vector": eternaForestRegions
    },
    "Old Chateau": {
        "shortname": 'oldchateau',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": oldChateauRegions
    },
    "Team Galactic Eterna Building": {
        "shortname": 'teamgalacticeternabuilding',
        "zoom": 1,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-256, 128],
        "vector": teamGalacticEternaBuildingRegions
    },
    "Wayward Cave": {
        "shortname": 'waywardcave',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 256],
        "vector": waywardCaveRegions
    },
    "Wayward Cave Secret": {
        "shortname": 'waywardcavesecret',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": waywardCaveSecretRegions
    },
    "Amity Square": {
        "shortname": 'amitysquare',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": amitySquareRegions
    },
    "Lost Tower": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'losttower',
        "zoom": 1,
        "minZoom": 1,
        "maxZoom": 2,
        "bounds": [-512, 128],
        "vector": lostTowerRegions
    },
    "Solaceon Ruins": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'solaceonruins',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-256, 128],
        "vector": solaceonRuinsRegions
    },
    "Solaceon Ruins Upper": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'solaceonruinsupper',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 2,
        "bounds": [-128, 128],
        "vector": solaceonRuinsUpperRegions
    },
    "Maniac Tunnel": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'maniactunnel',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 2,
        "bounds": [-128, 1048],
        "vector": maniacTunnelRegions
    },
    "Celestic Ruins": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'celesticruins',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 128],
        "vector": celesticRuinsRegions
    },
    "Great Marsh": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'greatmarsh',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 5,
        "bounds": [-128, 128],
        "vector": greatMarshRegions
    },
    "Lake Valor": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'lakevalor',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": lakeValorRegions
    },
    "Valor Cavern": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'valorcavern',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 128],
        "vector": valorCavernRegions
    },
    "Lake Valor Dry": { // TODO: add more zoom levels so this map makes sense
        "shortname": 'lakevalordry',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": lakeValorDryRegions
    },
    "Pokémon Mansion": {
        "shortname": 'pokemonmansion',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 256],
        "vector": pokemonMansionRegions
    },
    "Trophy Garden": {
        "shortname": 'trophygarden',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 128],
        "vector": trophyGardenRegions
    },
    "Lake Acuity": {
        "shortname": 'lakeacuity',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": lakeAcuityRegions
    },
    "Acuity Cavern": {
        "shortname": 'acuitycavern',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 128],
        "vector": acuityCavernRegions
    },
    "Snowpoint Temple": {
        "shortname": 'snowpointtemple',
        "zoom": 1,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-512, 128],
        "vector": snowpointTempleRegions
    },
    "Sendoff Spring": {
        "shortname": 'sendoffspring',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": sendoffSpringRegions
    },
    "Turnback Cave": {
        "shortname": 'turnbackcave',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 5,
        "bounds": [-256, 128],
        "vector": turnbackCaveRegions
    },
    "Stark Mountain": {
        "shortname": 'starkmountain',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 5,
        "bounds": [-128, 128],
        "vector": starkMountainRegions
    },
    "Fuego Ironworks": {
        "shortname": 'fuegoironworks',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 256],
        "vector": fuegoIronworksRegions
    },
    "Battle Frontier": {
        "shortname": 'battlefrontier',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 4,
        "bounds": [-128, 256],
        "vector": battleFrontierRegions
    },
    "Rock Peak Ruins": {
        "shortname": 'rockpeakruins',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 128],
        "vector": rockPeakRuinsRegions
    },
    "Victory Road": {
        "shortname": 'victoryroad',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 512],
        "vector": victoryRoadRegions
    },
    "Victory Road Secret": {
        "shortname": 'victoryroadsecret',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 512],
        "vector": victoryRoadSecretRegions
    },
    "Pokémon League": {
        "shortname": 'pokemonleague',
        "zoom": 2,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-512, 128],
        "vector": pokemonLeagueRegions
    },
    "Mount Coronet South": {
        "shortname": 'mountcoronetsouth',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-512, 128],
        "vector": mountCoronetSouthRegions
    },
    "Mount Coronet Peak": {
        "shortname": 'mountcoronetpeak',
        "zoom": 3,
        "minZoom": 2,
        "maxZoom": 4,
        "bounds": [-128, 128],
        "vector": mountCoronetPeakRegions
    },
    "Mount Coronet Center": {
        "shortname": 'mountcoronetcenter',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-128, 256],
        "vector": mountCoronetCenterRegions
    },
    "Mount Coronet Tunnel": {
        "shortname": 'mountcoronettunnel',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-256, 128],
        "vector": mountCoronetTunnelRegions
    },
    "Spear Pillar": {
        "shortname": 'spearpillar',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 3,
        "bounds": [-256, 128],
        "vector": spearPillarRegions
    },
    "Mount Coronet North": {
        "shortname": 'mountcoronetnorth',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 4,
        "bounds": [-512, 128],
        "vector": mountCoronetNorthRegions
    },
    "Flower Paradise": {
        "shortname": 'flowerparadise',
        "zoom": 2,
        "minZoom": 1,
        "maxZoom": 4,
        "bounds": [-512, 128],
        "vector": flowerParadiseRegions
    },
}