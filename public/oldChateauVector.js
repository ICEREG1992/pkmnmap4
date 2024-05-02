var oldChateauVector = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Old Chateau (1F & 2F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": "14-17",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-304.5, 118.5), getCordfromLoc(-419.0, 118.5), getCordfromLoc(-419.0, 390.5), getCordfromLoc(-304.5, 390.5), getCordfromLoc(-304.5, 118.5)]]
        }
      }, {
        'type': 'Feature',
        'properties': {
            'name': 'Old Chateau (1F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": "14-17",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-206.5, 107.0), getCordfromLoc(-281.0, 107.0), getCordfromLoc(-281.0, 403.0), getCordfromLoc(-206.5, 403.0), getCordfromLoc(-206.5, 107.0)]]
        }
      }, {
        'type': 'Feature',
        'properties': {
            'name': 'Old Chateau (2F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": "14-17",
                    "rate": '100%',
                }],
                "Special Encounter": [{
                    "name": "Rotom",
                    "area": "TV",
                    "levels": "20",
                    "rate": ['0%', '0%', 'One']
                }]
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-91.5, 106.5), getCordfromLoc(-183.0, 106.5), getCordfromLoc(-183.0, 403.0), getCordfromLoc(-91.5, 403.0), getCordfromLoc(-91.5, 106.5)]]
        }
      }
    ]
};