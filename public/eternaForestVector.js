var eternaForestVector = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Eterna Forest',
            'world': 'Overworld',
            'Pokémon': {
                "Grass": [{
                    "name": "Gastly",
                    "area": "Grass",
                    "levels": "13",
                    "rate": '4%',
                }, {
                    "name": "Hoothoot",
                    "area": "Grass",
                    "levels": "12",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Wurmple",
                    "area": "Grass",
                    "levels": "10",
                    "rate": ['10%', '10%', '0%'],
                }, {
                    "name": "Silcoon",
                    "area": "Grass",
                    "levels": "12",
                    "rate": '5%',
                }, {
                    "name": "Beautifly",
                    "area": "Grass",
                    "levels": "14",
                    "rate": '1%',
                }, {
                    "name": "Cascoon",
                    "area": "Grass",
                    "levels": "12",
                    "rate": '20%',
                }, {
                    "name": "Dustox",
                    "area": "Grass",
                    "levels": "14",
                    "rate": '1%',
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "12",
                    "rate": '10%',
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": "12",
                    "rate": ['10%', '0%', '10%'],
                }, {
                    "name": "Budew",
                    "area": "Grass",
                    "levels": "10-11",
                    "rate": ['30%', '40%', '30%'],
                }, {
                    "name": "Buneary",
                    "area": "Grass",
                    "levels": "11, 13",
                    "rate": '24%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-109.0, 63.0), getCordfromLoc(-401.0, 63.0), getCordfromLoc(-401.0, 446.75), getCordfromLoc(-109.0, 446.75), getCordfromLoc(-109.0, 63.0)]],
        }
      }
    ]
};