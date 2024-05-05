var verityCavernRegions = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'name': 'Verity Cavern',
          'world': 'Overworld',
          'Pokémon': {},
        },
        'geometry': {
          'type': 'Polygon',
          'coordinates': [[getCordfromLoc(-58, 24), getCordfromLoc(-454, 24), getCordfromLoc(-454, 488), getCordfromLoc(-58, 488)]],
        }
      }
    ]
  };

  var oreburghGateRegions = {
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

var oreburghMineRegions = {
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

var ravagedPathRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Ravaged Path',
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
        'coordinates': [[getCordfromLoc(-185.0, 0.0), getCordfromLoc(-837.0, 0.0), getCordfromLoc(-837.0, 510.0), getCordfromLoc(-185.0, 510.0), getCordfromLoc(-185.0, 0.0)]]
        }
      }
    ]
};

var floaromaMeadowRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Floaroma Meadow',
            'world': 'Overworld',
            'Pokémon': {},
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-54.5, -1.0), getCordfromLoc(-455.5, -1.0), getCordfromLoc(-455.5, 510.5), getCordfromLoc(-54.5, 510.5), getCordfromLoc(-54.5, -1.0)]],
        }
      },
    ]
};

var valleyWindworksRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Valley Windworks',
            'world': 'Overworld',
            'Pokémon': {},
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-45.0, 159.0), getCordfromLoc(-463.0, 159.0), getCordfromLoc(-463.0, 863.0), getCordfromLoc(-45.0, 863.0), getCordfromLoc(-45.0, 159.0)]]
        }
      },
    ]
};

var eternaForestRegions = {
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

var oldChateauRegions = {
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

var teamGalacticEternaBuildingRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'name': 'Team Galactic Eterna Building (1F)',
                'world': 'Overworld',
                'Pokémon': {},
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-637.0, 38.0), getCordfromLoc(-988.0, 38.0), getCordfromLoc(-988.0, 470.0), getCordfromLoc(-637.0, 470.0), getCordfromLoc(-637.0, 38.0)]],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'name': 'Team Galactic Eterna Building (2F)',
                'world': 'Overworld',
                'Pokémon': {},
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-438.0, 79.0), getCordfromLoc(-597.0, 79.0), getCordfromLoc(-597.0, 431.0), getCordfromLoc(-438.0, 431.0), getCordfromLoc(-438.0, 79.0)]],
            }
        }, {
            'type': 'Feature',
            'properties': {
                'name': 'Team Galactic Eterna Building (3F)',
                'world': 'Overworld',
                'Pokémon': {},
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-237.0, 79.0), getCordfromLoc(-396.0, 79.0), getCordfromLoc(-396.0, 431.0), getCordfromLoc(-237.0, 431.0), getCordfromLoc(-237.0, 79.0)]],
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Team Galactic Eterna Building (4F)',
                'world': 'Overworld',
                'Pokémon': {},
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-36.0, 79.0), getCordfromLoc(-195.0, 79.0), getCordfromLoc(-195.0, 431.0), getCordfromLoc(-36.0, 431.0), getCordfromLoc(-36.0, 79.0)]],
            }
        },
    ]
};

var waywardCaveRegions = {
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

var waywardCaveSecretRegions = {
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

var amitySquareRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Amity Square',
            'world': 'Overworld',
            'Pokémon': {},
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-61.5, 3.5), getCordfromLoc(-448.5, 3.5), getCordfromLoc(-448.5, 506.5), getCordfromLoc(-61.5, 506.5), getCordfromLoc(-61.5, 3.5)]]
        }
      },
    ]
};