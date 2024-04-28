var oreburghMineVector = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Oreburgh Mine B1F',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "5-7",
                    "rate": '25%',
                }, {
                    "name": "Geodude",
                    "area": "Walking",
                    "levels": "4-8",
                    "rate": '65%',
                }, {
                    "name": "Onix",
                    "area": "Walking",
                    "levels": "6, 8",
                    "rate": '10%',
                } ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-51.0, 152.5), getCordfromLoc(-239.0, 152.5), getCordfromLoc(-239.0, 351.5), getCordfromLoc(-51.0, 351.5), getCordfromLoc(-51.0, 152.5)]],
        }
      }, {
          'type': 'Feature',
          'properties': {
              'name': 'Oreburgh Mine B2F',
              'world': 'Overworld',
              'Pokémon': {
                "Cave": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "6-8",
                    "rate": '25%',
                }, {
                    "name": "Geodude",
                    "area": "Walking",
                    "levels": "5-9",
                    "rate": '65%',
                }, {
                    "name": "Onix",
                    "area": "Walking",
                    "levels": "7, 9",
                    "rate": '10%',
                } ],
            },
          },
          'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-258.5, 125.0), getCordfromLoc(-459.0, 125.0), getCordfromLoc(-459.0, 385.0), getCordfromLoc(-258.5, 385.0), getCordfromLoc(-258.5, 125.0)]],
          }
        },
    ]
};