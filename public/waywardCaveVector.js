var waywardCaveVector = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Wayward Cave',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "17, 19",
                    "rate": '15%',
                }, {
                    "name": "Geodude",
                    "area": "Walking",
                    "levels": "17-20",
                    "rate": '40%',
                }, {
                    "name": "Onix",
                    "area": "Walking",
                    "levels": "18-20",
                    "rate": '15%',
                }, {
                    "name": "Bronzor",
                    "area": "Walking",
                    "levels": "18, 20",
                    "rate": '30%',
                } ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-81.5, 127.0), getCordfromLoc(-428.0, 127.0), getCordfromLoc(-428.0, 895.0), getCordfromLoc(-81.5, 895.0), getCordfromLoc(-81.5, 127.0)]]
        }
      },
    ]
};