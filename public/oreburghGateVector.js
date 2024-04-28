var oreburghGateVector = {
  'type': 'FeatureCollection',
  'features': [
    {
        'type': 'Feature',
        'properties': {
            'name': 'Oreburgh Gate 1F',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "5-8",
                    "rate": '50%',
                }, {
                    "name": "Psyduck",
                    "area": "Walking",
                    "levels": "5-7",
                    "rate": '35%',
                }, {
                    "name": "Geodude",
                    "area": "Walking",
                    "levels": "5-7",
                    "rate": '15%',
                } ],
            },
      },
      'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-67.5, 142), getCordfromLoc(-232.5, 142), getCordfromLoc(-232.5, 367.5), getCordfromLoc(-67.5, 367.5)]],
      }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Oreburgh Gate B1F',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "6-9",
                    "rate": '45%',
                }, {
                    "name": "Golbat",
                    "area": "Walking",
                    "levels": "10",
                    "rate": '5%',
                }, {
                    "name": "Psyduck",
                    "area": "Walking",
                    "levels": "8-10",
                    "rate": '35%',
                }, {
                    "name": "Geodude",
                    "area": "Walking",
                    "levels": "6-8",
                    "rate": '15%',
                } ],
                "Surfing": [{
                    "name": "Zubat",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Golbat",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '5%',
                }, {
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '5%',
                } ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Barboach",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Whiscash",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                } ],
            },
        },
        'geometry': {
          'type': 'Polygon',
          'coordinates': [[getCordfromLoc(-256, -1), getCordfromLoc(-442, -1), getCordfromLoc(-442, 511), getCordfromLoc(-256, 511)]],
        }
      },
  ]
};