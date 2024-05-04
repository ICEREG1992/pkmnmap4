var overworldRegions = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Twinleaf Town",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '10%',
                } ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "15-35",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-462.375, 142.9375), getCordfromLoc(-486.25, 142.9375), getCordfromLoc(-486.25, 174.9375), getCordfromLoc(-462.375, 174.9375), getCordfromLoc(-462.375, 142.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": { 
            "name": "Route 201",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "2-3",
                    "rate": ['50%', '50%', '40%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "2-4",
                    "rate": ['40%', '50%', '50%'],
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": "3",
                    "rate": ['10%', '0%', '10%'],
                }],
                "Gifts": [{
                    "name": "Turtwig",
                    "area": "Starter",
                    "levels": "5",
                    "rate": 'One',
                }, {
                    "name": "Chimchar",
                    "area": "Starter",
                    "levels": "5",
                    "rate": 'One',
                }, {
                    "name": "Piplup",
                    "area": "Starter",
                    "levels": "5",
                    "rate": 'One',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-440.375, 117.9375), getCordfromLoc(-462.375, 117.9375), getCordfromLoc(-462.375, 207.9375), getCordfromLoc(-440.375, 207.9375), getCordfromLoc(-440.375, 117.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": { 
            "name": "Lake Verity",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "2-3",
                    "rate": ['50%', '50%', '40%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "2-4",
                    "rate": ['50%', '50%', '60%'],
                }],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '10%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "15-20",
                    "rate": '40%',
                }, {
                    "name": "Seaking",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, ],
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-404.125, 87.4375), getCordfromLoc(-440.375, 87.4375), getCordfromLoc(-440.375, 141.4375), getCordfromLoc(-404.125, 141.4375), getCordfromLoc(-404.125, 87.4375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Fallarbor Town",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-440.375, 207.9375), getCordfromLoc(-462.375, 207.9375), getCordfromLoc(-462.375, 238.9375), getCordfromLoc(-440.375, 238.9375), getCordfromLoc(-440.375, 207.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 219",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "15-20",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-462.4375, 207.9375), getCordfromLoc(-485.5, 207.9375), getCordfromLoc(-485.5, 238.9375), getCordfromLoc(-462.4375, 238.9375), getCordfromLoc(-462.4375, 207.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 220",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-10",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "15-20",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Chinchou",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-485.5, 207.4375), getCordfromLoc(-511, 207.4375), getCordfromLoc(-511, 271.4375), getCordfromLoc(-485.5, 271.4375), getCordfromLoc(-485.5, 207.4375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 221",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Sudowoodo",
                    "area": "Grass",
                    "levels": "29-31",
                    "rate": '25%',
                }, {
                    "name": "Girafarig",
                    "area": "Grass",
                    "levels": "28, 30",
                    "rate": '25%',
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": ["28-30", "28-30", "29-30"],
                    "rate": ['25%', '25%', '15%'],
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": ["29, 31", "29, 31", "28-29, 31"],
                    "rate": ['25%', '25%', '35%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Lumineon",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-484.5625, 271.4375), getCordfromLoc(-510.8125, 271.4375), getCordfromLoc(-510.8125, 367.4375), getCordfromLoc(-501.4375, 367.4375), getCordfromLoc(-501.4375, 329.4375), getCordfromLoc(-484.5625, 329.4375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Pal Park",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-448.6875, 329.4375), getCordfromLoc(-501.375, 329.4375), getCordfromLoc(-501.375, 393.3125), getCordfromLoc(-448.6875, 393.3125), getCordfromLoc(-448.6875, 329.4375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 202",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "2, 4",
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "2-4",
                    "rate": ['40%', '50%', '50%'],
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": ['3', '0', '4'],
                    "rate": ['10%', '0%', '10%'],
                }, {
                    "name": "Shinx",
                    "area": "Grass",
                    "levels": "3-4",
                    "rate": '30%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-413.0625, 205.5), getCordfromLoc(-440.375, 205.5), getCordfromLoc(-440.375, 243.625), getCordfromLoc(-413.0625, 243.625), getCordfromLoc(-413.0625, 205.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Jubilife City",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-363.125, 175), getCordfromLoc(-413.0625, 175), getCordfromLoc(-413.0625, 241), getCordfromLoc(-363.125, 241), getCordfromLoc(-363.125, 175)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 218",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Mr. Mime",
                    "area": "Grass",
                    "levels": "29-31",
                    "rate": '25%',
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": "28-30",
                    "rate": ['30%', '30%', '40%'],
                }, {
                    "name": "Gastrodon",
                    "area": "Grass",
                    "levels": "28, 30",
                    "rate": ['25%', '25%', '35%'],
                }, {
                    "name": "Chatot",
                    "area": "Grass",
                    "levels": "28, 30",
                    "rate": ['20%', '20%', '0%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-363.125, 111.5), getCordfromLoc(-389.4375, 111.5), getCordfromLoc(-389.4375, 175), getCordfromLoc(-363.125, 175), getCordfromLoc(-363.125, 111.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Canalave City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-341, 78.9375), getCordfromLoc(-389.4375, 78.9375), getCordfromLoc(-389.4375, 111.5), getCordfromLoc(-341, 111.5), getCordfromLoc(-341, 78.9375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 203",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "4",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Abra",
                    "area": "Grass",
                    "levels": "4-5",
                    "rate": '15%',
                }, {
                    "name": "Starly",
                    "area": "Grass",
                    "levels": ["4-7", "4-7", "4, 6, 7"],
                    "rate": ['35%', '35%', '25%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": ['5-7', '4-7', '5-7'],
                    "rate": ['15%', '25%', '15%'],
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": ['4', '0', '5'],
                    "rate": ['10%', '0%', '10%'],
                }, {
                    "name": "Shinx",
                    "area": "Grass",
                    "levels": "4-5",
                    "rate": '25%',
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '10%',
                }, ],
                "Fishing": [{
                    "name": "Maggikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-363.125, 241), getCordfromLoc(-386.125, 241), getCordfromLoc(-386.125, 303.1875), getCordfromLoc(-363.125, 303.1875), getCordfromLoc(-363.125, 241)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Oreburgh City",
            "world": "Overworld",
            "Pokémon": {
                "Trade": [{
                    "name": "Abra",
                    "area": "Trade Machop",
                    "levels": "The same as the traded Pokémon",
                    "rate": 'One',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-361.75, 303.1875), getCordfromLoc(-413, 303.1875), getCordfromLoc(-413, 367.1875), getCordfromLoc(-361.75, 367.1875), getCordfromLoc(-361.75, 303.1875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 204 (South)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "3",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Wurmple",
                    "area": "Grass",
                    "levels": "4",
                    "rate": ['10%', '10%', '0%'],
                }, {
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "4-6",
                    "rate": "25%",
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "4-6",
                    "rate": "25%",
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": ["3", "0", "4"],
                    "rate": ['10%', '0%', '10%'],
                }, {
                    "name": "Shinx",
                    "area": "Grass",
                    "levels": "4-5",
                    "rate": "15%",
                }, {
                    "name": "Budew",
                    "area": "Grass",
                    "levels": ["4-5", "3-5", "4-5"],
                    "rate": ['15%', '25%', '15%'],
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Grass",
                    "levels": "20-30",
                    "rate": "90%",
                }, {
                    "name": "Golduck",
                    "area": "Grass",
                    "levels": "20-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": "100%",
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": "45%",
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": "55%",
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": "45%",
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": "55%",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-338.75, 207.6875), getCordfromLoc(-363.125, 207.6875), getCordfromLoc(-363.125, 239.375), getCordfromLoc(-338.75, 239.375), getCordfromLoc(-338.75, 207.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 204 (North)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "8",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Wurmple",
                    "area": "Grass",
                    "levels": "9",
                    "rate": ['10%', '10%', '0%'],
                }, {
                    "name": "Starly",
                    "area": "Grass",
                    "levels": "9-11",
                    "rate": "25%",
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "9-11",
                    "rate": "25%",
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": ["8", "0", "9"],
                    "rate": ['10%', '0%', '10%'],
                }, {
                    "name": "Shinx",
                    "area": "Grass",
                    "levels": "9-10",
                    "rate": "15%",
                }, {
                    "name": "Budew",
                    "area": "Grass",
                    "levels": "8-10",
                    "rate": ['15%', '25%', '15%'],
                }, ],
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-312.125, 207.6875), getCordfromLoc(-338.75, 207.6875), getCordfromLoc(-338.75, 239.375), getCordfromLoc(-312.125, 239.375), getCordfromLoc(-312.125, 207.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Floaroma Town",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-262.5625, 207.4375), getCordfromLoc(-312.125, 207.4375), getCordfromLoc(-312.125, 239.5625), getCordfromLoc(-262.5625, 239.5625), getCordfromLoc(-262.5625, 207.4375)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 205 (South)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "10",
                    "rate": '10%',
                }, {
                    "name": "Pachirisu",
                    "area": "Grass",
                    "levels": "9, 11",
                    "rate": '10%',
                }, {
                    "name": "Buizel",
                    "area": "Grass",
                    "levels": "10-11",
                    "rate": '15%',
                }, {
                    "name": "Shellos",
                    "area": "Grass",
                    "levels": "9-12",
                    "rate": '65%',
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Shellder",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-235.375, 239.5625), getCordfromLoc(-309.25, 239.5625), getCordfromLoc(-309.25, 271.5625), getCordfromLoc(-235.375, 271.5625), getCordfromLoc(-235.375, 239.5625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Valley Windworks",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Shinx",
                    "area": "Grass",
                    "levels": "10",
                    "rate": '20%',
                }, {
                    "name": "Pachirisu",
                    "area": "Grass",
                    "levels": "9, 11",
                    "rate": '10%',
                }, {
                    "name": "Buizel",
                    "area": "Grass",
                    "levels": "9-11",
                    "rate": '25%',
                }, {
                    "name": "Shellos",
                    "area": "Grass",
                    "levels": "9-12",
                    "rate": '45%',
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Shellder",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ],
                "Special Encounter": [{
                    "name": "Drifloon",
                    "area": "By Sign",
                    "levels": "15",
                    "rate": 'Every Friday',
                }, ],
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-287, 271.5625), getCordfromLoc(-312.4375, 271.5625), getCordfromLoc(-312.4375, 303.5), getCordfromLoc(-287, 303.5), getCordfromLoc(-287, 271.5625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Fuego Ironworks",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Magnemite",
                    "area": "Grass",
                    "levels": "28-30",
                    "rate": '20%',
                }, {
                    "name": "Magmar",
                    "area": "Grass",
                    "levels": "28-29",
                    "rate": ['30%', '30%', '20%'],
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": "29-31",
                    "rate": '25%',
                }, {
                    "name": "Gastrodon",
                    "area": "Grass",
                    "levels": "29-31",
                    "rate": ['15%','15%', '25%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '9%',
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '1%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Finneon",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Shellder",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Lumineon",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-234.0625, 207.5), getCordfromLoc(-262.5625, 207.5), getCordfromLoc(-262.5625, 239.5), getCordfromLoc(-234.0625, 239.5), getCordfromLoc(-234.0625, 207.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Eterna Forest (Exterior)",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-198.0625, 257.25), getCordfromLoc(-235.375, 257.25), getCordfromLoc(-235.375, 303.5), getCordfromLoc(-198.0625, 303.5), getCordfromLoc(-198.0625, 257.25)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 205 (North)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Hoothoot",
                    "area": "Grass",
                    "levels": "12",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Wurmple",
                    "area": "Grass",
                    "levels": "13",
                    "rate": ['10%', '10%', '0%'],
                }, {
                    "name": "Silcoon",
                    "area": "Grass",
                    "levels": "14",
                    "rate": '10%',
                }, {
                    "name": "Beautifly",
                    "area": "Grass",
                    "levels": "15",
                    "rate": '1%',
                }, {
                    "name": "Cascoon",
                    "area": "Grass",
                    "levels": "14",
                    "rate": '10%',
                }, {
                    "name": "Dustox",
                    "area": "Grass",
                    "levels": "15",
                    "rate": '1%',
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "12-14",
                    "rate": '30%',
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": ["12-13", '0', '13'],
                    "rate": ['10%', '0%', '10%'],
                }, {
                    "name": "Budew",
                    "area": "Grass",
                    "levels": "12-14",
                    "rate": ['28%', '38%', '28%'],
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '10%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
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
                    "levels": "20-50",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-187.3125, 303.5), getCordfromLoc(-212.25, 303.5), getCordfromLoc(-212.25, 335.1875), getCordfromLoc(-187.3125, 335.1875), getCordfromLoc(-187.3125, 303.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Eterna City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": '10%',
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
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
                    "levels": "20-50",
                    "rate": '45%',
                }, ],
                "Gifts": [{
                    "name": "Togepi",
                    "area": "Egg",
                    "levels": "1",
                    "rate": "One",
                }]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-184.625, 335.1875), getCordfromLoc(-236.375, 335.1875), getCordfromLoc(-236.375, 399.1875), getCordfromLoc(-184.625, 399.1875), getCordfromLoc(-184.625, 335.1875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 206",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "17",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Machop",
                    "area": "Grass",
                    "levels": "17-19",
                    "rate": "20%",
                }, {
                    "name": "Geodude",
                    "area": "Grass",
                    "levels": "16, 18",
                    "rate": '30%',
                }, {
                    "name": "Ponyta",
                    "area": "Grass",
                    "levels": ['16', '16-17', '16'],
                    "rate": ['20%', '30%', '20%'],
                }, {
                    "name": "Gligar",
                    "area": "Grass",
                    "levels": ['16, 18', '16, 18', '16'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Kricketune",
                    "area": "Grass",
                    "levels": ['17', '0', '18'],
                    "rate": ['10%', '0%', '10%'],
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-236.375, 338.125), getCordfromLoc(-335.75, 338.125), getCordfromLoc(-335.75, 365.25), getCordfromLoc(-236.375, 365.25), getCordfromLoc(-236.375, 338.125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 207",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "5",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Machop",
                    "area": "Grass",
                    "levels": ['6-8', '5-8', '6-8'],
                    "rate": ['35%', '45%', '35%'],
                }, {
                    "name": "Geodude",
                    "area": "Grass",
                    "levels": "5-7",
                    "rate": '30%',
                }, {
                    "name": "Ponyta",
                    "area": "Grass",
                    "levels": ['5-7', '5-7', '5, 7'],
                    "rate": ['25%', '25%', '15%'],
                }, {
                    "name": "Kricketot",
                    "area": "Grass",
                    "levels": ['5', '0', '6'],
                    "rate": ['10%', '0%', '10%'],
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-335.75, 335.1875), getCordfromLoc(-361.75, 335.1875), getCordfromLoc(-361.75, 402.0625), getCordfromLoc(-335.75, 402.0625), getCordfromLoc(-335.75, 335.1875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 211 (West)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "14",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Machop",
                    "area": "Grass",
                    "levels": "14-15",
                    "rate": "15%",
                }, {
                    "name": "Hoothoot",
                    "area": "Grass",
                    "levels": "15",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Meditite",
                    "area": "Grass",
                    "levels": ['13-15', '13-15', '13'],
                    "rate": ['40%', '40%', '20%'],
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "14",
                    "rate": "20%",
                }, {
                    "name": "Chingling",
                    "area": "Grass",
                    "levels": "14, 16",
                    "rate": "15%",
                }, {
                    "name": "Bronzor",
                    "area": "Grass",
                    "levels": "14, 16",
                    "rate": "10%",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-189.25, 399.1875), getCordfromLoc(-211.375, 399.1875), getCordfromLoc(-211.375, 432.6875), getCordfromLoc(-189.25, 432.6875), getCordfromLoc(-189.25, 399.1875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 211 (East)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "28",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Machoke",
                    "area": "Grass",
                    "levels": "29-30",
                    "rate": "15%",
                }, {
                    "name": "Graveler",
                    "area": "Grass",
                    "levels": "28",
                    "rate": "20%",
                }, {
                    "name": "Noctowl",
                    "area": "Grass",
                    "levels": "29",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Meditite",
                    "area": "Grass",
                    "levels": ['27-29', '27-29', '27'],
                    "rate": ['40%', '40%', '20%'],
                }, {
                    "name": "Chingling",
                    "area": "Grass",
                    "levels": "28, 30",
                    "rate": "15%",
                }, {
                    "name": "Bronzor",
                    "area": "Grass",
                    "levels": "29",
                    "rate": "10%",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-187.0625, 432.6875), getCordfromLoc(-214.625, 432.6875), getCordfromLoc(-214.625, 466.125), getCordfromLoc(-187.0625, 466.125), getCordfromLoc(-187.0625, 432.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Celestic Town",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "15-35",
                    "rate": '45%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "40-55",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Corphish",
                    "area": "Super Rod",
                    "levels": "30-40",
                    "rate": '40%',
                }, {
                    "name": "Crawdaunt",
                    "area": "Super Rod",
                    "levels": "40-55",
                    "rate": '15%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-186.0625, 466.125), getCordfromLoc(-215.3125, 466.125), getCordfromLoc(-215.3125, 498.125), getCordfromLoc(-186.0625, 498.125), getCordfromLoc(-186.0625, 466.125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 210 (North)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Machop",
                    "area": "Grass",
                    "levels": "28-29",
                    "rate": '15%',
                }, {
                    "name": "Machoke",
                    "area": "Grass",
                    "levels": "29-30",
                    "rate": '10%',
                }, {
                    "name": "Scyther",
                    "area": "Grass",
                    "levels": ['27, 29', '29', '29'],
                    "rate": ['15%', '5%', '5%'],
                }, {
                    "name": "Hoothoot",
                    "area": "Grass",
                    "levels": "27",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Noctowl",
                    "area": "Grass",
                    "levels": "27",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Meditite",
                    "area": "Grass",
                    "levels": ['27, 29', '27, 29', '29'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Swablu",
                    "area": "Grass",
                    "levels": "27",
                    "rate": ['20%', '30%', '20%'],
                }, {
                    "name": "Bibarel",
                    "area": "Grass",
                    "levels": "28",
                    "rate": '20%',
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Barboach",
                    "area": "Good Rod",
                    "levels": "15-20",
                    "rate": '40%',
                }, {
                    "name": "Whiscash",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Whiscash",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-191.4375, 498.125), getCordfromLoc(-214.5, 498.125), getCordfromLoc(-214.5, 562.6875), getCordfromLoc(-217.375, 562.6875), getCordfromLoc(-217.375, 596.125), getCordfromLoc(-191.4375, 596.125), getCordfromLoc(-191.4375, 498.125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 210 (South)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Geodude",
                    "area": "Grass",
                    "levels": "18",
                    "rate": "20%",
                }, {
                    "name": "Ponyta",
                    "area": "Grass",
                    "levels": ['19-21', '19-21', '19, 21'],
                    "rate": ['25%', '35%', '15%'],
                }, {
                    "name": "Chansey",
                    "area": "Grass",
                    "levels": "19, 21",
                    "rate": "5%",
                }, {
                    "name": "Scyther",
                    "area": "Grass",
                    "levels": ['19, 21', '19', '19'],
                    "rate": ['15%', '5%', '5%'],
                }, {
                    "name": "Hoothoot",
                    "area": "Grass",
                    "levels": "20",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Noctowl",
                    "area": "Grass",
                    "levels": "21",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": "20-21",
                    "rate": "15%",
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": "19",
                    "rate": "20%",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-217.375, 562.6875), getCordfromLoc(-291.625, 562.6875), getCordfromLoc(-291.625, 596.125), getCordfromLoc(-217.375, 596.125), getCordfromLoc(-217.375, 562.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Solaceon Town",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-291.625, 560.625), getCordfromLoc(-317.375, 560.625), getCordfromLoc(-317.375, 626.0625), getCordfromLoc(-291.625, 626.0625), getCordfromLoc(-291.625, 560.625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 209",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "19",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Chansey",
                    "area": "Grass",
                    "levels": "17, 19",
                    "rate": '5%',
                }, {
                    "name": "Ralts",
                    "area": "Grass",
                    "levels": ['17-19', '17-19', '18-19'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": "19-20",
                    "rate": "25%",
                }, {
                    "name": "Duskull",
                    "area": "Grass",
                    "levels": "17",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": ['18-19', '18-19', '18'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Bibarel",
                    "area": "Grass",
                    "levels": "18-19",
                    "rate": "30%",
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '35%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '65%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '35%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '65%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-317.375, 529.8125), getCordfromLoc(-367.9375, 529.8125), getCordfromLoc(-367.9375, 594.5625), getCordfromLoc(-317.375, 594.5625), getCordfromLoc(-317.375, 529.8125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Hearthome City",
            "world": "Overworld",
            "Pokémon": {
                "Gifts":[{
                    "name": "Eevee",
                    "area": "Gift",
                    "levels": "20",
                    "rate": "One",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-317.125, 465.5), getCordfromLoc(-365.9375, 465.5), getCordfromLoc(-365.9375, 529.8125), getCordfromLoc(-317.125, 529.8125), getCordfromLoc(-317.125, 465.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 208",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "19",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Ralts",
                    "area": "Grass",
                    "levels": "17-18",
                    "rate": "15%",
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": "19-20",
                    "rate": "15%",
                }, {
                    "name": "Bidoof",
                    "area": "Grass",
                    "levels": "18",
                    "rate": "20%",
                }, {
                    "name": "Bibarel",
                    "area": "Grass",
                    "levels": "18-20",
                    "rate": "20%",
                }, {
                    "name": "Budew",
                    "area": "Grass",
                    "levels": ['18-19', '18-19', '18'],
                    "rate": ['30%', '30%', '20%'],
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-337.9375, 402.0625), getCordfromLoc(-365.9375, 402.0625), getCordfromLoc(-365.9375, 465.5), getCordfromLoc(-337.9375, 465.5), getCordfromLoc(-337.9375, 402.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 215",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Abra",
                    "area": "Grass",
                    "levels": "19",
                    "rate": "10%",
                }, {
                    "name": "Kadabra",
                    "area": "Grass",
                    "levels": "21-22",
                    "rate": "10%",
                }, {
                    "name": "Lickitung",
                    "area": "Grass",
                    "levels": "20",
                    "rate": "10%",
                }, {
                    "name": "Scyther",
                    "area": "Grass",
                    "levels": ['20-22', '20', '20'],
                    "rate": ['15%', '5%', '5%'],
                }, {
                    "name": "Marill",
                    "area": "Grass",
                    "levels": "20-22",
                    "rate": ['25%', '25%', '45%'],
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": ['19, 21', '19, 21-22', '19'],
                    "rate": ['30%', '40%', '20%'],
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-240.5, 596.125), getCordfromLoc(-264.25, 596.125), getCordfromLoc(-264.25, 688.125), getCordfromLoc(-240.5, 688.125), getCordfromLoc(-240.5, 596.125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Veilstone City",
            "world": "Overworld",
            "Pokémon": {
                "Gifts":[{
                    "name": "Porygon",
                    "area": "Gift",
                    "levels": "25",
                    "rate": "One",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-240.875, 688.125), getCordfromLoc(-293.375, 688.125), getCordfromLoc(-293.375, 752.0625), getCordfromLoc(-240.875, 752.0625), getCordfromLoc(-240.875, 688.125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 214",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "22",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Geodude",
                    "area": "Grass",
                    "levels": "21",
                    "rate": "20%",
                }, {
                    "name": "Graveler",
                    "area": "Grass",
                    "levels": ['22-24', '22-24', '23-24'],
                    "rate": ['35%', '35%', '25%'],
                }, {
                    "name": "Rhyhorn",
                    "area": "Grass",
                    "levels": "21, 23-24",
                    "rate": ['30%', '30%', '20%'],
                }, {
                    "name": "Houndour",
                    "area": "Grass",
                    "levels": ['23-24', '23-24', '22-24'],
                    "rate": ['15%', '15%', '25%'],
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-293.375, 724.625), getCordfromLoc(-366.9375, 724.625), getCordfromLoc(-366.9375, 753.3125), getCordfromLoc(-293.375, 753.3125), getCordfromLoc(-293.375, 724.625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Spring Path",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-343.375, 753.3125), getCordfromLoc(-358.375, 753.3125), getCordfromLoc(-358.375, 782.0625), getCordfromLoc(-343.375, 782.0625), getCordfromLoc(-343.375, 753.3125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Valor Lakefront",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Girafarig",
                    "area": "Grass",
                    "levels": "26, 28",
                    "rate": "25%",
                }, {
                    "name": "Houndoor",
                    "area": "Grass",
                    "levels": ['28', '28', '27-28'],
                    "rate": ['10%', '10%', '20%'],
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": ['26-28', '26-28', '27-28'],
                    "rate": ['25%', '35%', '15%'],
                }, {
                    "name": "Bibarel",
                    "area": "Grass",
                    "levels": '25-27',
                    "rate": '30%',
                }, {
                    "name": "Kricketune",
                    "area": "Grass",
                    "levels": ['27', '0', '27'],
                    "rate": ['10%', '0%', '10%'],
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-366.9375, 688.0625), getCordfromLoc(-411.3125, 688.0625), getCordfromLoc(-411.3125, 752.0625), getCordfromLoc(-366.9375, 752.0625), getCordfromLoc(-366.9375, 688.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 213",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Wingull",
                    "area": "Grass",
                    "levels": "24-26",
                    "rate": '20%',
                }, {
                    "name": "Buizel",
                    "area": "Grass",
                    "levels": "23, 25",
                    "rate": ['25%', '25%', '35%'],
                }, {
                    "name": "Shellos",
                    "area": "Grass",
                    "levels": ['24-26', '24-26', '23-26'],
                    "rate": ['35%', '35%', '45%'],
                }, {
                    "name": "Chatot",
                    "area": "Grass",
                    "levels": "23, 25",
                    "rate": ['20%', '20%', '0%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "5%",
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": "30%",
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": "4%",
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "1%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-411.3125, 656.0625), getCordfromLoc(-466.0, 656.0625), getCordfromLoc(-466.0, 752.0625), getCordfromLoc(-411.3125, 752.0625), getCordfromLoc(-411.3125, 656.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Pastoria City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "5%",
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": "4%",
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": "30%",
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "1%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-413.4375, 592.0625), getCordfromLoc(-466.0, 592.0625), getCordfromLoc(-466.0, 656.0625), getCordfromLoc(-413.4375, 656.0625), getCordfromLoc(-413.4375, 592.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 212 (South)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Quagsire",
                    "area": "Grass",
                    "levels": "24, 26",
                    "rate": '30%',
                }, {
                    "name": "Buizel",
                    "area": "Grass",
                    "levels": "23, 25",
                    "rate": '15%',
                }, {
                    "name": "Shellos",
                    "area": "Grass",
                    "levels": '23-26',
                    "rate": '45%',
                }, {
                    "name": "Croagunk",
                    "area": "Grass",
                    "levels": "24-25",
                    "rate": '10%',
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '30%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "1%",
                }, {
                    "name": "Shellos",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": "60%",
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "9%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-441.4375, 465.5), getCordfromLoc(-466.0, 465.5), getCordfromLoc(-466.0, 592.0625), getCordfromLoc(-441.4375, 592.0625), getCordfromLoc(-441.4375, 465.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 212 (North)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Marill",
                    "area": "Grass",
                    "levels": ['21, 23', '21, 23', '21-23'],
                    "rate": ['25%', '25%', '45%'],
                }, {
                    "name": "Ralts",
                    "area": "Grass",
                    "levels": '22',
                    "rate": ['0%', '10%', '0%'],
                }, {
                    "name": "Kirlia",
                    "area": "Grass",
                    "levels": ['22, 24', '24', '24'],
                    "rate": ['20%', '10%', '10%'],
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": "22-24",
                    "rate": '35%',
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": ['21, 23', '21, 23', '21'],
                    "rate": ['20%', '20%', '10%'],
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "20-30",
                    "rate": '90%',
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "20-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-365.9375, 465.5), getCordfromLoc(-441.4375, 465.5), getCordfromLoc(-441.4375, 499.0), getCordfromLoc(-365.9375, 499.0), getCordfromLoc(-365.9375, 465.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 222",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Magnemite",
                    "area": "Grass",
                    "levels": "39",
                    "rate": "10%",
                }, {
                    "name": "Magneton",
                    "area": "Grass",
                    "levels": '41',
                    "rate": "5%",
                }, {
                    "name": "Electabuzz",
                    "area": "Grass",
                    "levels": ['39, 41', '39, 41', '39'],
                    "rate": ['30%', '30%', '20%'],
                }, {
                    "name": "Wingull",
                    "area": "Grass",
                    "levels": "38",
                    "rate": '10%',
                }, {
                    "name": "Pelipper",
                    "area": "Grass",
                    "levels": "40",
                    "rate": "5%",
                }, {
                    "name": "Luxio",
                    "area": "Grass",
                    "levels": "38, 40",
                    "rate": "10%",
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": ['40', '40', '38, 40-41'],
                    "rate": ['20%', '20%', '40%'],
                }, {
                    "name": "Chatot",
                    "area": "Grass",
                    "levels": "38",
                    "rate": ['10%', '10%', '0%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "30-40",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "9%",
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "30-40",
                    "rate": "30%",
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "1%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-386.6875, 752.0625), getCordfromLoc(-417.375, 752.0625), getCordfromLoc(-417.375, 848.0625), getCordfromLoc(-386.6875, 848.0625), getCordfromLoc(-386.6875, 752.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Sunyshore City",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacool",
                    "area": "Surfing",
                    "levels": "30-40",
                    "rate": '60%',
                }, {
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "9%",
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "30-40",
                    "rate": "30%",
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "1%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Staryu",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-364.6875, 848.0625), getCordfromLoc(-416.4375, 848.0625), getCordfromLoc(-416.4375, 912.0625), getCordfromLoc(-364.6875, 912.0625), getCordfromLoc(-364.6875, 848.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 223",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "60%",
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "30%",
                }, {
                    "name": "Mantyke",
                    "area": "Surfing",
                    "levels": "30-40",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "15-25",
                    "rate": '40%',
                }, {
                    "name": "Octillery",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Wailmer",
                    "area": "Super Rod",
                    "levels": "30-40",
                    "rate": "40%",
                }, {
                    "name": "Wailord",
                    "area": "Super Rod",
                    "levels": "40-55",
                    "rate": "5%",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-267.8125, 848.0625), getCordfromLoc(-364.6875, 848.0625), getCordfromLoc(-364.6875, 880.0625), getCordfromLoc(-267.8125, 880.0625), getCordfromLoc(-267.8125, 848.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Pokémon League",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "5%",
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "30-40",
                    "rate": "60%",
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "30-50",
                    "rate": "35%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "15-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Luvdisc",
                    "area": "Super Rod",
                    "levels": "20-30",
                    "rate": "15%",
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-205.5625, 848.0625), getCordfromLoc(-267.8125, 848.0625), getCordfromLoc(-267.8125, 879.0625), getCordfromLoc(-205.5625, 879.0625), getCordfromLoc(-205.5625, 848.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 224",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Oddish",
                    "area": "Grass",
                    "levels": "49",
                    "rate": ['0%', '0%', '20%'],
                }, {
                    "name": "Gloom",
                    "area": "Grass",
                    "levels": '51',
                    "rate": "5%",
                }, {
                    "name": "Bellsprout",
                    "area": "Grass",
                    "levels": '49',
                    "rate": ['20%', '20%', '0%'],
                }, {
                    "name": "Weepinbell",
                    "area": "Grass",
                    "levels": "51",
                    "rate": '5%',
                }, {
                    "name": "Beautifly",
                    "area": "Grass",
                    "levels": "52",
                    "rate": "5%",
                }, {
                    "name": "Dustox",
                    "area": "Grass",
                    "levels": "52",
                    "rate": "5%",
                }, {
                    "name": "Pelipper",
                    "area": "Grass",
                    "levels": '51',
                    "rate": '10%',
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": "50",
                    "rate": '20%',
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": "50",
                    "rate": '20%',
                }, {
                    "name": "Gastrodon",
                    "area": "Grass",
                    "levels": "49",
                    "rate": '10%',
                }, ],
                "Surfing": [{
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "30%",
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "60%",
                }, {
                    "name": "Gastrodon",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "10%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Luvdisc",
                    "area": "Super Rod",
                    "levels": "20-30",
                    "rate": '15%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-192.9375, 879.0625), getCordfromLoc(-243.25, 879.0625), getCordfromLoc(-243.25, 911.5625), getCordfromLoc(-219.5625, 911.5625), getCordfromLoc(-219.5625, 943.0625), getCordfromLoc(-169.25, 943.0625), getCordfromLoc(-169.25, 910.5625), getCordfromLoc(-192.9375, 910.5625), getCordfromLoc(-192.9375, 879.0625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 216",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Zubat",
                    "area": "Grass",
                    "levels": "32",
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Graveler",
                    "area": "Grass",
                    "levels": '35',
                    "rate": '5%',
                }, {
                    "name": "Sneasel",
                    "area": "Grass",
                    "levels": '33-35',
                    "rate": '35%',
                }, {
                    "name": "Meditite",
                    "area": "Grass",
                    "levels": ['32-33', '32-33', '33'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Snorunt",
                    "area": "Grass",
                    "levels": '33',
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Snover",
                    "area": "Grass",
                    "levels": ['32-35', '32-35', '32, 34-35'],
                    "rate": ['40%', '40%', '30%'],
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-148.9375, 339.625), getCordfromLoc(-175.5, 339.625), getCordfromLoc(-175.5, 436.625), getCordfromLoc(-148.9375, 436.625), getCordfromLoc(-148.9375, 339.625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 217",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Sneasel",
                    "area": "Grass",
                    "levels": ['33-35', '33-35', '34-35'],
                    "rate": ['25%', '25%', '15%'],
                }, {
                    "name": "Swinub",
                    "area": "Grass",
                    "levels": '32-34',
                    "rate": '35%',
                }, {
                    "name": "Snorunt",
                    "area": "Grass",
                    "levels": '33',
                    "rate": ['0%', '0%', '20%'],
                }, {
                    "name": "Snover",
                    "area": "Grass",
                    "levels": ['32-35', '32-35', '32, 34-35'],
                    "rate": ['40%', '40%', '30%'],
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-56.1875, 339.625), getCordfromLoc(-148.9375, 339.625), getCordfromLoc(-148.9375, 372.625), getCordfromLoc(-56.1875, 372.625), getCordfromLoc(-56.1875, 339.625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Acuity Lakefront",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Sneasel",
                    "area": "Grass",
                    "levels": ['33-35', '33-35', '34-35'],
                    "rate": ['25%', '25%', '15%'],
                }, {
                    "name": "Swinub",
                    "area": "Grass",
                    "levels": '32-34',
                    "rate": '35%',
                }, {
                    "name": "Snorunt",
                    "area": "Grass",
                    "levels": '32-33',
                    "rate": ['0%', '0%', '20%'],
                }, {
                    "name": "Snover",
                    "area": "Grass",
                    "levels": ['32-35', '32-35', '33-35'],
                    "rate": ['40%', '40%', '30%'],
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-5.125, 339.625), getCordfromLoc(-56.1875, 339.625), getCordfromLoc(-56.1875, 403.625), getCordfromLoc(-5.125, 403.625), getCordfromLoc(-5.125, 339.625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Snowpoint City",
            "world": "Overworld",
            "Pokémon": {
                "Trade": [{
                    "name": "Haunter",
                    "area": "Trade Medicham",
                    "levels": "The same as the traded Pokémon",
                    "rate": 'One',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-2.1875, 403.625), getCordfromLoc(-56.1875, 403.625), getCordfromLoc(-56.1875, 435.125), getCordfromLoc(-2.1875, 435.125), getCordfromLoc(-2.1875, 403.625)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Resort Area",
            "world": "Overworld",
            "Pokémon": {
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "35-45",
                    "rate": "10%",
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "90%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-35",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Super Rod",
                    "levels": "40-60",
                    "rate": '40%',
                }, {
                    "name": "Magikarp",
                    "area": "Super Rod",
                    "levels": "30-70",
                    "rate": '40%',
                }, {
                    "name": "Magikarp",
                    "area": "Super Rod",
                    "levels": "20-80",
                    "rate": '15%',
                }, {
                    "name": "Magikarp",
                    "area": "Super Rod",
                    "levels": "10-90",
                    "rate": '4%',
                }, {
                    "name": "Magikarp",
                    "area": "Super Rod",
                    "levels": "1-100",
                    "rate": '1%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-173.375, 805.5), getCordfromLoc(-200.5625, 805.5), getCordfromLoc(-200.5625, 837.4375), getCordfromLoc(-173.375, 837.4375), getCordfromLoc(-173.375, 805.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 229",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Pidgey",
                    "area": "Grass",
                    "levels": ['47', '47, 50', '47'],
                    "rate": ['5%', '25%', '5%'],
                }, {
                    "name": "Ledian",
                    "area": "Grass",
                    "levels": '50',
                    "rate": ['20%', '0%', '0%'],
                }, {
                    "name": "Ariados",
                    "area": "Grass",
                    "levels": '50',
                    "rate": ['0%', '0%', '20%'],
                }, {
                    "name": "Beautifly",
                    "area": "Grass",
                    "levels": "48",
                    "rate": '5%',
                }, {
                    "name": "Dustox",
                    "area": "Grass",
                    "levels": "48",
                    "rate": "5%",
                }, {
                    "name": "Volbeat",
                    "area": "Grass",
                    "levels": "49",
                    "rate": "10%",
                }, {
                    "name": "Illumise",
                    "area": "Grass",
                    "levels": '49',
                    "rate": '10%',
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": "48-50",
                    "rate": '45%',
                }, ],
                "Surfing": [{
                    "name": "Surskit",
                    "area": "Surfing",
                    "levels": "35-45",
                    "rate": "95%",
                }, {
                    "name": "Masquerain",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "5%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Goldeen",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seaking",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '55%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-150.5, 773.5), getCordfromLoc(-173.375, 773.5), getCordfromLoc(-173.375, 837.4375), getCordfromLoc(-150.5, 837.4375), getCordfromLoc(-150.5, 773.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 228",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Diglett",
                    "area": "Grass",
                    "levels": '49',
                    "rate": '5%',
                }, {
                    "name": "Dugtrio",
                    "area": "Grass",
                    "levels": '50-52',
                    "rate": '30%',
                }, {
                    "name": "Rhydon",
                    "area": "Grass",
                    "levels": ['50, 52', '50, 52', '52'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Cacnea",
                    "area": "Grass",
                    "levels": "50",
                    "rate": '5%',
                }, {
                    "name": "Cacturne",
                    "area": "Grass",
                    "levels": ['52', '52', '50, 52'],
                    "rate": ['20%', '20%', '40%'],
                }, {
                    "name": "Hippowdon",
                    "area": "Grass",
                    "levels": ['50-51', '50-51', '51'],
                    "rate": ['20%', '20%', '10%'],
                }, ],
                "Surfing": [{
                    "name": "Poliwag",
                    "area": "Surfing",
                    "levels": "35-45",
                    "rate": "30%",
                }, {
                    "name": "Poliwhirl",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "70%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Barboach",
                    "area": "Good Rod",
                    "levels": "10-20",
                    "rate": '40%',
                }, {
                    "name": "Whiscash",
                    "area": "Good Rod",
                    "levels": "25-35",
                    "rate": '5%',
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
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-73.3125, 773.5), getCordfromLoc(-150.5, 773.5), getCordfromLoc(-150.5, 805.4375), getCordfromLoc(-73.3125, 805.4375), getCordfromLoc(-73.3125, 773.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 230",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Oddish",
                    "area": "Grass",
                    "levels": '47',
                    "rate": ['0%', '0%', '20%'],
                }, {
                    "name": "Gloom",
                    "area": "Grass",
                    "levels": '49',
                    "rate": '5%',
                }, {
                    "name": "Bellsprout",
                    "area": "Grass",
                    "levels": '47',
                    "rate": ['20%', '20%', '00%'],
                }, {
                    "name": "Weepinbell",
                    "area": "Grass",
                    "levels": "49",
                    "rate": '5%',
                }, {
                    "name": "Wingull",
                    "area": "Grass",
                    "levels": '48',
                    "rate": '5%',
                }, {
                    "name": "Pelipper",
                    "area": "Grass",
                    "levels": '48, 50',
                    "rate": '30%',
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": '49',
                    "rate": '10%',
                }, {
                    "name": "Floatzel",
                    "area": "Grass",
                    "levels": '48, 50',
                    "rate": '25%',
                }, ],
                "Surfing": [{
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "10%",
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "30%",
                }, {
                    "name": "Sealeo",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "60%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Remoraid",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Octillery",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, {
                    "name": "Wailmer",
                    "area": "Super Rod",
                    "levels": "30-40",
                    "rate": '40%',
                }, {
                    "name": "Wailord",
                    "area": "Super Rod",
                    "levels": "40-55",
                    "rate": '5%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-150.75, 677.5), getCordfromLoc(-175.5, 677.5), getCordfromLoc(-175.5, 773.5), getCordfromLoc(-150.75, 773.5), getCordfromLoc(-150.75, 677.5)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Fight Area",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-150.75, 613.6875), getCordfromLoc(-174.9375, 613.6875), getCordfromLoc(-174.9375, 677.5), getCordfromLoc(-150.75, 677.5), getCordfromLoc(-150.75, 613.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 225",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Rattata",
                    "area": "Grass",
                    "levels": '47',
                    "rate": '5%',
                }, {
                    "name": "Raticate",
                    "area": "Grass",
                    "levels": '49-50',
                    "rate": '15%',
                }, {
                    "name": "Spearow",
                    "area": "Grass",
                    "levels": '47',
                    "rate": '5%',
                }, {
                    "name": "Fearow",
                    "area": "Grass",
                    "levels": ['48-50', '48-50', '49'],
                    "rate": ['30%', '30%', '10%'],
                }, {
                    "name": "Machoke",
                    "area": "Grass",
                    "levels": '48, 50',
                    "rate": '25%',
                }, {
                    "name": "Graveler",
                    "area": "Grass",
                    "levels": '49',
                    "rate": '20%',
                }, {
                    "name": "Banette",
                    "area": "Grass",
                    "levels": '50, 52',
                    "rate": ['0%', '0%', '20%'],
                }, ],
                "Surfing": [{
                    "name": "Psyduck",
                    "area": "Surfing",
                    "levels": "35-45",
                    "rate": "10%",
                }, {
                    "name": "Golduck",
                    "area": "Surfing",
                    "levels": "40-55",
                    "rate": "90%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
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
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-71.5, 613.6875), getCordfromLoc(-150.75, 613.6875), getCordfromLoc(-150.75, 645.6875), getCordfromLoc(-71.5, 645.6875), getCordfromLoc(-71.5, 613.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Survival Area",
            "world": "Overworld",
            "Pokémon": {}
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-71.5, 645.6875), getCordfromLoc(-101.4375, 645.6875), getCordfromLoc(-101.4375, 677.8125), getCordfromLoc(-71.5, 677.8125), getCordfromLoc(-71.5, 645.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 226",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Rattata",
                    "area": "Grass",
                    "levels": '47',
                    "rate": '5%',
                }, {
                    "name": "Raticate",
                    "area": "Grass",
                    "levels": '49-50',
                    "rate": '15%',
                }, {
                    "name": "Fearow",
                    "area": "Grass",
                    "levels": '48, 50',
                    "rate": ['20%', '20%', '0%'],
                }, {
                    "name": "Machoke",
                    "area": "Grass",
                    "levels": '48, 50',
                    "rate": '25%',
                }, {
                    "name": "Graveler",
                    "area": "Grass",
                    "levels": '49',
                    "rate": '20%',
                }, {
                    "name": "Wingull",
                    "area": "Grass",
                    "levels": '47, 49',
                    "rate": '15%',
                }, {
                    "name": "Banette",
                    "area": "Grass",
                    "levels": '50, 52',
                    "rate": ['0%', '0%', '20%'],
                }, ],
                "Surfing": [{
                    "name": "Tentacruel",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "10%",
                }, {
                    "name": "Wingull",
                    "area": "Surfing",
                    "levels": "35-45",
                    "rate": "60%",
                }, {
                    "name": "Pelipper",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "30%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
                }, {
                    "name": "Horsea",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '45%',
                }, {
                    "name": "Magikarp",
                    "area": "Good Rod",
                    "levels": "10-25",
                    "rate": '55%',
                }, {
                    "name": "Seadra",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '45%',
                }, {
                    "name": "Gyarados",
                    "area": "Super Rod",
                    "levels": "30-55",
                    "rate": '40%',
                }, {
                    "name": "Relicanth",
                    "area": "Super Rod",
                    "levels": "20-50",
                    "rate": '15%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-71.5, 677.8125), getCordfromLoc(-101.4375, 677.8125), getCordfromLoc(-101.4375, 773.5), getCordfromLoc(-71.5, 773.5), getCordfromLoc(-71.5, 677.8125)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Route 227",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Fearow",
                    "area": "Grass",
                    "levels": ['51, 53', '51, 53', '53'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Golbat",
                    "area": "Grass",
                    "levels": '51',
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Graveler",
                    "area": "Grass",
                    "levels": '51, 53',
                    "rate": '15%',
                }, {
                    "name": "Weezing",
                    "area": "Grass",
                    "levels": '52',
                    "rate": '10%',
                }, {
                    "name": "Rhyhorn",
                    "area": "Grass",
                    "levels": '52',
                    "rate": '5%',
                }, {
                    "name": "Rhydon",
                    "area": "Grass",
                    "levels": '54',
                    "rate": '20%',
                }, {
                    "name": "Skarmory",
                    "area": "Grass",
                    "levels": '53',
                    "rate": '5%',
                }, {
                    "name": "Numel",
                    "area": "Grass",
                    "levels": '51',
                    "rate": '5%',
                }, {
                    "name": "Camerupt",
                    "area": "Grass",
                    "levels": '53',
                    "rate": '20%',
                }, ],
                "Surfing": [{
                    "name": "Poliwag",
                    "area": "Surfing",
                    "levels": "35-45",
                    "rate": "30%",
                }, {
                    "name": "Poliwhirl",
                    "area": "Surfing",
                    "levels": "35-55",
                    "rate": "70%",
                }, ],
                "Fishing": [{
                    "name": "Magikarp",
                    "area": "Old Rod",
                    "levels": "3-15",
                    "rate": '100%',
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
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(-23.0, 741.6875), getCordfromLoc(-71.5, 741.6875), getCordfromLoc(-71.5, 773.5), getCordfromLoc(-23.0, 773.5), getCordfromLoc(-23.0, 741.6875)]]
        }
    }, {
        "type": "Feature",
        "properties": {
            "name": "Stark Mountain (Exterior)",
            "world": "Overworld",
            "Pokémon": {
                "Grass": [{
                    "name": "Fearow",
                    "area": "Grass",
                    "levels": ['51, 53', '51, 53', '53'],
                    "rate": ['20%', '20%', '10%'],
                }, {
                    "name": "Golbat",
                    "area": "Grass",
                    "levels": '51',
                    "rate": ['0%', '0%', '10%'],
                }, {
                    "name": "Graveler",
                    "area": "Grass",
                    "levels": '51, 53',
                    "rate": '15%',
                }, {
                    "name": "Weezing",
                    "area": "Grass",
                    "levels": '52',
                    "rate": '10%',
                }, {
                    "name": "Rhyhorn",
                    "area": "Grass",
                    "levels": '52',
                    "rate": '5%',
                }, {
                    "name": "Rhydon",
                    "area": "Grass",
                    "levels": '54',
                    "rate": '20%',
                }, {
                    "name": "Skarmory",
                    "area": "Grass",
                    "levels": '53',
                    "rate": '5%',
                }, {
                    "name": "Numel",
                    "area": "Grass",
                    "levels": '51',
                    "rate": '5%',
                }, {
                    "name": "Camerupt",
                    "area": "Grass",
                    "levels": '53',
                    "rate": '20%',
                }, ]
            }
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[getCordfromLoc(1.0, 741.6875), getCordfromLoc(-23.0, 741.6875), getCordfromLoc(-23.0, 773.5), getCordfromLoc(1.0, 773.5), getCordfromLoc(1.0, 741.6875)]]
        }
    }, 
    ]
}
