var waywardCaveSecretVector = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Wayward Cave Secret',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "19",
                    "rate": '10%',
                }, {
                    "name": "Geodude",
                    "area": "Walking",
                    "levels": "18, 20",
                    "rate": '25%',
                }, {
                    "name": "Onix",
                    "area": "Walking",
                    "levels": "18, 20",
                    "rate": '15%',
                }, {
                    "name": "Bronzor",
                    "area": "Walking",
                    "levels": "18, 20",
                    "rate": '30%',
                }, {
                    "name": "Gible",
                    "area": "Walking",
                    "levels": "17, 19-20",
                    "rate": '20%',
                } ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-119.5, 35.0), getCordfromLoc(-390.5, 35.0), getCordfromLoc(-390.5, 474.0), getCordfromLoc(-119.5, 474.0), getCordfromLoc(-119.5, 35.0)]]
        }
      },
    ]
};