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

var lostTowerRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Lost Tower (1F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "17-19",
                    "rate": '35%',
                }, {
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": ['17-20', '17-20', '17-18, 20'],
                    "rate": ['65%', '65%', '45%'],
                }, {
                    "name": "Duskull",
                    "area": "Walking",
                    "levels": "17, 19",
                    "rate": ['0%', '0%', '20%'],
                }, ]
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-1675.0, 47.0), getCordfromLoc(-2045.0, 47.0), getCordfromLoc(-2045.0, 461.0), getCordfromLoc(-1675.0, 461.0), getCordfromLoc(-1675.0, 47.0)]]
        }
      }, {
        'type': 'Feature',
        'properties': {
            'name': 'Lost Tower (2F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "17-19",
                    "rate": '35%',
                }, {
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": '17-20',
                    "rate": ['65%', '65%', '45%'],
                }, {
                    "name": "Duskull",
                    "area": "Walking",
                    "levels": "17, 19",
                    "rate": ['0%', '0%', '20%'],
                }, ]
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-1255.0, 47.0), getCordfromLoc(-1619.0, 47.0), getCordfromLoc(-1619.0, 461.0), getCordfromLoc(-1255.0, 461.0), getCordfromLoc(-1255.0, 47.0)]]
        }
      }, {
        'type': 'Feature',
        'properties': {
            'name': 'Lost Tower (3F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "18-20",
                    "rate": '35%',
                }, {
                    "name": "Golbat",
                    "area": "Walking",
                    "levels": "21",
                    "rate": '1%',
                }, {
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": '18-21',
                    "rate": ['64%', '64%', '44%'],
                }, {
                    "name": "Duskull",
                    "area": "Walking",
                    "levels": "18, 20",
                    "rate": ['0%', '0%', '20%'],
                }, ]
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-835.0, 47.0), getCordfromLoc(-1199.0, 47.0), getCordfromLoc(-1199.0, 461.0), getCordfromLoc(-835.0, 461.0), getCordfromLoc(-835.0, 47.0)]]
        }
      }, {
        'type': 'Feature',
        'properties': {
            'name': 'Lost Tower (4F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "18-20",
                    "rate": '35%',
                }, {
                    "name": "Golbat",
                    "area": "Walking",
                    "levels": "21",
                    "rate": '5%',
                }, {
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": '18-21',
                    "rate": ['60%', '60%', '40%'],
                }, {
                    "name": "Duskull",
                    "area": "Walking",
                    "levels": "18, 20",
                    "rate": ['0%', '0%', '20%'],
                }, ]
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-419.0, 47.0), getCordfromLoc(-779.0, 47.0), getCordfromLoc(-779.0, 461.0), getCordfromLoc(-419.0, 461.0), getCordfromLoc(-419.0, 47.0)]]
        }
      }, {
        'type': 'Feature',
        'properties': {
            'name': 'Lost Tower (5F)',
            'world': 'Overworld',
            'Pokémon': {
                "Walking": [{
                    "name": "Zubat",
                    "area": "Walking",
                    "levels": "19-21",
                    "rate": '30%',
                }, {
                    "name": "Golbat",
                    "area": "Walking",
                    "levels": "22",
                    "rate": '10%',
                }, {
                    "name": "Gastly",
                    "area": "Walking",
                    "levels": ['19-22', '19-22', '19-20, 22'],
                    "rate": ['55%', '55%', '35%'],
                }, {
                    "name": "Duskull",
                    "area": "Walking",
                    "levels": "19, 21",
                    "rate": ['0%', '0%', '20%'],
                }, ]
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(1.0, 47.0), getCordfromLoc(-363.0, 47.0), getCordfromLoc(-363.0, 461.0), getCordfromLoc(1.0, 461.0), getCordfromLoc(1.0, 47.0)]]
        }
      }
    ]
};

var solaceonRuinsRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (1F)',
            'world': 'Overworld',
            'Pokémon': {},
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-223.0, 211.0), getCordfromLoc(-309.5, 211.0), getCordfromLoc(-309.5, 299.0), getCordfromLoc(-223.0, 299.0), getCordfromLoc(-223.0, 211.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (1F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-234.0, 144.5), getCordfromLoc(-277.0, 144.5), getCordfromLoc(-277.0, 208.5), getCordfromLoc(-234.0, 208.5), getCordfromLoc(-234.0, 144.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (1F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-276.5, 302.0), getCordfromLoc(-319.5, 302.0), getCordfromLoc(-319.5, 366.0), getCordfromLoc(-276.5, 366.0), getCordfromLoc(-276.5, 302.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B1F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (F)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-347.0, 177.0), getCordfromLoc(-433.5, 177.0), getCordfromLoc(-433.5, 265.0), getCordfromLoc(-347.0, 265.0), getCordfromLoc(-347.0, 177.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B1F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-339.0, 267.5), getCordfromLoc(-382.0, 267.5), getCordfromLoc(-382.0, 347.5), getCordfromLoc(-339.0, 347.5), getCordfromLoc(-339.0, 267.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B1F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-400.0, 267.5), getCordfromLoc(-443.5, 267.5), getCordfromLoc(-443.5, 331.5), getCordfromLoc(-400.0, 331.5), getCordfromLoc(-400.0, 267.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B2F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (R)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-463.0, 244.0), getCordfromLoc(-549.5, 244.0), getCordfromLoc(-549.5, 332.0), getCordfromLoc(-463.0, 332.0), getCordfromLoc(-463.0, 244.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B2F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-473.0, 176.5), getCordfromLoc(-516.0, 176.5), getCordfromLoc(-516.0, 240.5), getCordfromLoc(-473.0, 240.5), getCordfromLoc(-473.0, 176.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B2F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-516.5, 176.5), getCordfromLoc(-559.5, 176.5), getCordfromLoc(-559.5, 240.5), getCordfromLoc(-516.5, 240.5), getCordfromLoc(-516.5, 176.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B3F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (I)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-586.0, 303.0), getCordfromLoc(-672.5, 303.0), getCordfromLoc(-672.5, 391.0), getCordfromLoc(-586.0, 391.0), getCordfromLoc(-586.0, 303.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B3F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (N)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-594.0, 130.5), getCordfromLoc(-680.5, 130.5), getCordfromLoc(-680.5, 218.5), getCordfromLoc(-594.0, 218.5), getCordfromLoc(-594.0, 130.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B3F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-604.0, 64.0), getCordfromLoc(-647.0, 64.0), getCordfromLoc(-647.0, 128.0), getCordfromLoc(-604.0, 128.0), getCordfromLoc(-604.0, 64.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B3F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-639.5, 220.5), getCordfromLoc(-682.5, 220.5), getCordfromLoc(-682.5, 300.5), getCordfromLoc(-639.5, 300.5), getCordfromLoc(-639.5, 220.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B3F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-639.5, 393.0), getCordfromLoc(-682.5, 393.0), getCordfromLoc(-682.5, 457.0), getCordfromLoc(-639.5, 457.0), getCordfromLoc(-639.5, 393.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B4F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (E)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-702.5, 269.5), getCordfromLoc(-789.0, 269.5), getCordfromLoc(-789.0, 357.5), getCordfromLoc(-702.5, 357.5), getCordfromLoc(-702.5, 269.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B4F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (D)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '100%',
                }],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-710.0, 86.5), getCordfromLoc(-796.5, 86.5), getCordfromLoc(-796.5, 174.5), getCordfromLoc(-710.0, 174.5), getCordfromLoc(-710.0, 86.5)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B4F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-736.0, 179.0), getCordfromLoc(-779.0, 179.0), getCordfromLoc(-779.0, 267.0), getCordfromLoc(-736.0, 267.0), getCordfromLoc(-736.0, 179.0)]]
        }
      },
      {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins (B4F)',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (A)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (B)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (C)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (G)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (H)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (J)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (K)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (L)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (M)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (O)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (P)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Q)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (S)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (T)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (U)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (V)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (W)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (X)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Y)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, {
                    "name": "Unown (Z)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '5%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-755.5, 359.5), getCordfromLoc(-798.5, 359.5), getCordfromLoc(-798.5, 423.5), getCordfromLoc(-755.5, 423.5), getCordfromLoc(-755.5, 359.5)]]
        }
      },
    ]
};

var solaceonRuinsUpperRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Solaceon Ruins Upper',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Unown (?)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": '50%',
                }, {
                    "name": "Unown (!)",
                    "area": "Walking",
                    "levels": "20-30",
                    "rate": "50%",
                } ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-81.0, 79.0), getCordfromLoc(-427.0, 79.0), getCordfromLoc(-427.0, 431.0), getCordfromLoc(-81.0, 431.0), getCordfromLoc(-81.0, 79.0)]]
        }
      },
    ]
};

var maniacTunnelRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Maniac Tunnel',
            'world': 'Overworld',
            'Pokémon': {
                "Cave": [{
                    "name": "Geodude",
                    "area": "Walking",
                    "levels": "23-25",
                    "rate": '80%',
                }, {
                    "name": "Hippopotas",
                    "area": "Walking",
                    "levels": "24-26",
                    "rate": "20%",
                } ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-71.0, 531.0), getCordfromLoc(-439.0, 531.0), getCordfromLoc(-439.0, 3561.0), getCordfromLoc(-71.0, 3561.0), getCordfromLoc(-71.0, 531.0)]]
        }
      },
    ]
};

var celesticRuinsRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Celestic Ruins',
            'world': 'Overworld',
            'Pokémon': {},
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-117.0, 118.0), getCordfromLoc(-390.0, 118.0), getCordfromLoc(-390.0, 391.0), getCordfromLoc(-117.0, 391.0), getCordfromLoc(-117.0, 118.0)]]
        }
      },
    ]
};

var greatMarshRegions = {
    'type': 'FeatureCollection',
    'features': [ 
        {
            'type': 'Feature',
            'properties': {
                'name': 'Great Marsh (Area 1)',
                'world': 'Overworld',
                'Pokémon': {
                    "Grass": [{
                        "name": "Tangela",
                        "area": "Grass",
                        "levels": "30-31",
                        "rate": '5%',
                    }, {
                        "name": "Noctowl",
                        "area": "Grass",
                        "levels": "28, 30",
                        "rate": ['0%', '0%', '20%'],
                    }, {
                        "name": "Yanma",
                        "area": "Grass",
                        "levels": "30-31",
                        "rate": '5%',
                    }, {
                        "name": "Wooper",
                        "area": "Grass",
                        "levels": "28-30",
                        "rate": '40%',
                    }, {
                        "name": "Quagsire",
                        "area": "Grass",
                        "levels": "30",
                        "rate": '10%',
                    }, {
                        "name": "Tropius",
                        "area": "Grass",
                        "levels": "28, 30",
                        "rate": ['20%', '20%', '0%'],
                    }, {
                        "name": "Bibarel",
                        "area": "Grass",
                        "levels": "25",
                        "rate": '20%',
                    }, ],
                },
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-105.0, 119.0), getCordfromLoc(-215.0, 119.0), getCordfromLoc(-215.0, 219.0), getCordfromLoc(-221.25, 219.0), getCordfromLoc(-221.25, 263.0), getCordfromLoc(-105.0, 263.0), getCordfromLoc(-105.0, 119.0)]]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Great Marsh (Area 2)',
                'world': 'Overworld',
                'Pokémon': {
                    "Grass": [{
                        "name": "Tangela",
                        "area": "Grass",
                        "levels": "30-31",
                        "rate": '5%',
                    }, {
                        "name": "Noctowl",
                        "area": "Grass",
                        "levels": "28, 30",
                        "rate": ['0%', '0%', '20%'],
                    }, {
                        "name": "Yanma",
                        "area": "Grass",
                        "levels": "30-31",
                        "rate": '5%',
                    }, {
                        "name": "Wooper",
                        "area": "Grass",
                        "levels": "28-30",
                        "rate": '40%',
                    }, {
                        "name": "Quagsire",
                        "area": "Grass",
                        "levels": "30",
                        "rate": '10%',
                    }, {
                        "name": "Tropius",
                        "area": "Grass",
                        "levels": "28, 30",
                        "rate": ['20%', '20%', '0%'],
                    }, {
                        "name": "Bibarel",
                        "area": "Grass",
                        "levels": "25",
                        "rate": '20%',
                    }, ],
                    "Surfing": [{
                        "name": "Wooper",
                        "area": "Surfing",
                        "levels": "20-30",
                        "rate": '90%',
                    }, {
                        "name": "Quagsire",
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
                        "rate": '40%',
                    }, {
                        "name": "Carvanha",
                        "area": "Super Rod",
                        "levels": "30-55",
                        "rate": '45%',
                    }, {
                        "name": "Whiscash",
                        "area": "Super Rod",
                        "levels": "20-50",
                        "rate": '15%',
                    }, ]
                },
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-105.0, 263.0), getCordfromLoc(-215.0, 263.0), getCordfromLoc(-215.0, 391.0), getCordfromLoc(-105.0, 391.0), getCordfromLoc(-105.0, 263.0)]]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Great Marsh (Area 3)',
                'world': 'Overworld',
                'Pokémon': {
                    "Grass": [{
                        "name": "Tangela",
                        "area": "Grass",
                        "levels": ['27-30', '27-30', '28-30'],
                        "rate": ['25%', '25%', '15%'],
                    }, {
                        "name": "Hoothoot",
                        "area": "Grass",
                        "levels": "27",
                        "rate": ['0%', '0%', '10%'],
                    }, {
                        "name": "Noctowl",
                        "area": "Grass",
                        "levels": "28",
                        "rate": ['0%', '0%', '10%'],
                    }, {
                        "name": "Yanma",
                        "area": "Grass",
                        "levels": "29-30",
                        "rate": '5%',
                    }, {
                        "name": "Wooper",
                        "area": "Grass",
                        "levels": "27-39",
                        "rate": '30%',
                    }, {
                        "name": "Quagsire",
                        "area": "Grass",
                        "levels": "29",
                        "rate": '10%',
                    }, {
                        "name": "Bibarel",
                        "area": "Grass",
                        "levels": ['27-28', '27-28', '27'],
                        "rate": ['30%', '30%', '20%'],
                    }, ],
                    "Surfing": [{
                        "name": "Wooper",
                        "area": "Surfing",
                        "levels": "20-30",
                        "rate": '90%',
                    }, {
                        "name": "Quagsire",
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
                        "rate": '40%',
                    }, {
                        "name": "Carvanha",
                        "area": "Super Rod",
                        "levels": "30-55",
                        "rate": '45%',
                    }, {
                        "name": "Whiscash",
                        "area": "Super Rod",
                        "levels": "20-50",
                        "rate": '15%',
                    }, ]
                },
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-215.0, 119.0), getCordfromLoc(-296.75, 119.0), getCordfromLoc(-296.75, 263.0), getCordfromLoc(-221.25, 263.0), getCordfromLoc(-221.25, 219.0), getCordfromLoc(-215.0, 219.0), getCordfromLoc(-215.0, 119.0)]]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Great Marsh (Area 4)',
                'world': 'Overworld',
                'Pokémon': {
                    "Grass": [{
                        "name": "Tangela",
                        "area": "Grass",
                        "levels": ['27-30', '27-30', '28-30'],
                        "rate": ['25%', '25%', '15%'],
                    }, {
                        "name": "Hoothoot",
                        "area": "Grass",
                        "levels": "27",
                        "rate": ['0%', '0%', '10%'],
                    }, {
                        "name": "Noctowl",
                        "area": "Grass",
                        "levels": "28",
                        "rate": ['0%', '0%', '10%'],
                    }, {
                        "name": "Yanma",
                        "area": "Grass",
                        "levels": "29-30",
                        "rate": '5%',
                    }, {
                        "name": "Wooper",
                        "area": "Grass",
                        "levels": "27-39",
                        "rate": '30%',
                    }, {
                        "name": "Quagsire",
                        "area": "Grass",
                        "levels": "29",
                        "rate": '10%',
                    }, {
                        "name": "Bibarel",
                        "area": "Grass",
                        "levels": ['27-28', '27-28', '27'],
                        "rate": ['30%', '30%', '20%'],
                    }, ],
                },
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-215.0, 263.0), getCordfromLoc(-280.0, 263.0), getCordfromLoc(-280.0, 391.0), getCordfromLoc(-215.0, 391.0), getCordfromLoc(-215.0, 263.0)]]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Great Marsh (Area 5)',
                'world': 'Overworld',
                'Pokémon': {
                    "Grass": [{
                        "name": "Tangela",
                        "area": "Grass",
                        "levels": '28-29',
                        "rate": '5%',
                    }, {
                        "name": "Hoothoot",
                        "area": "Grass",
                        "levels": "26-27",
                        "rate": ['0%', '0%', '20%'],
                    }, {
                        "name": "Yanma",
                        "area": "Grass",
                        "levels": ['26-29', '26-29', '27-29'],
                        "rate": ['25%', '25%', '15%'],
                    }, {
                        "name": "Wooper",
                        "area": "Grass",
                        "levels": "26-28",
                        "rate": '30%',
                    }, {
                        "name": "Quagsire",
                        "area": "Grass",
                        "levels": "28",
                        "rate": '10%',
                    }, {
                        "name": "Bibarel",
                        "area": "Grass",
                        "levels": ['26-27', '26-27', '26'],
                        "rate": ['30%', '30%', '20%'],
                    }, ],
                },
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-296.75, 119.0), getCordfromLoc(-405.0, 119.0), getCordfromLoc(-405.0, 263.0), getCordfromLoc(-296.75, 263.0), getCordfromLoc(-296.75, 119.0)]]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Great Marsh (Area 6)',
                'world': 'Overworld',
                'Pokémon': {
                    "Grass": [{
                        "name": "Tangela",
                        "area": "Grass",
                        "levels": '28-29',
                        "rate": '5%',
                    }, {
                        "name": "Hoothoot",
                        "area": "Grass",
                        "levels": "26-27",
                        "rate": ['0%', '0%', '20%'],
                    }, {
                        "name": "Yanma",
                        "area": "Grass",
                        "levels": ['26-29', '26-29', '27-29'],
                        "rate": ['25%', '25%', '15%'],
                    }, {
                        "name": "Wooper",
                        "area": "Grass",
                        "levels": "26-28",
                        "rate": '30%',
                    }, {
                        "name": "Quagsire",
                        "area": "Grass",
                        "levels": "28",
                        "rate": '10%',
                    }, {
                        "name": "Starly",
                        "area": "Grass",
                        "levels": "22",
                        "rate": ['10%', '10%', '0%'],
                    }, {
                        "name": "Bibarel",
                        "area": "Grass",
                        "levels": ['26-27', '26-27', '26'],
                        "rate": ['30%', '30%', '20%'],
                    }, ],
                    "Surfing": [{
                        "name": "Wooper",
                        "area": "Surfing",
                        "levels": "20-30",
                        "rate": '90%',
                    }, {
                        "name": "Quagsire",
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
                        "rate": '40%',
                    }, {
                        "name": "Carvanha",
                        "area": "Super Rod",
                        "levels": "30-55",
                        "rate": '45%',
                    }, {
                        "name": "Whiscash",
                        "area": "Super Rod",
                        "levels": "20-50",
                        "rate": '15%',
                    }, ]
                },
            },
            'geometry': {
            'type': 'Polygon',
            'coordinates': [[getCordfromLoc(-280.0, 263.0), getCordfromLoc(-405.0, 263.0), getCordfromLoc(-405.0, 391.0), getCordfromLoc(-280.0, 391.0), getCordfromLoc(-280.0, 263.0)]]
            }
        },
    ]
};

var lakeValorRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Lake Valor',
            'world': 'Overworld',
            'Pokémon': {
                "Grass": [{
                    "name": "Psyduck",
                    "area": "Grass",
                    "levels": "38-39",
                    "rate": '15%',
                }, {
                    "name": "Golduck",
                    "area": "Grass",
                    "levels": "40-41",
                    "rate": '15%',
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": "38, 40",
                    "rate": '35%',
                }, {
                    "name": "Bibarel",
                    "area": "Grass",
                    "levels": "39, 41",
                    "rate": '35%',
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
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-75.0, 39.0), getCordfromLoc(-435.0, 39.0), getCordfromLoc(-435.0, 471.0), getCordfromLoc(-75.0, 471.0), getCordfromLoc(-75.0, 39.0)]]
        }
      }
    ]
};

var valorCavernRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Valor Cavern',
            'world': 'Overworld',
            'Pokémon': {},
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-58.0, 23.0), getCordfromLoc(-452.0, 23.0), getCordfromLoc(-452.0, 487.0), getCordfromLoc(-58.0, 487.0), getCordfromLoc(-58.0, 23.0)]]
        }
      }
    ]
};

var lakeValorDryRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': 'Lake Valor Dry',
            'world': 'Overworld',
            'Pokémon': {
                "Grass": [{
                    "name": "Psyduck",
                    "area": "Grass",
                    "levels": "38-39",
                    "rate": '15%',
                }, {
                    "name": "Golduck",
                    "area": "Grass",
                    "levels": "40-41",
                    "rate": '15%',
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": "38, 40",
                    "rate": '35%',
                }, {
                    "name": "Bibarel",
                    "area": "Grass",
                    "levels": "39, 41",
                    "rate": '35%',
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-90.0, 23.0), getCordfromLoc(-420.0, 23.0), getCordfromLoc(-420.0, 487.0), getCordfromLoc(-90.0, 487.0), getCordfromLoc(-90.0, 23.0)]]
        }
      }
    ]
};

var pokemonMansionRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': "Pokémon Mansion",
            'world': 'Overworld',
            'Pokémon': {},
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-96.0, 59.0), getCordfromLoc(-413.0, 59.0), getCordfromLoc(-413.0, 963.0), getCordfromLoc(-96.0, 963.0), getCordfromLoc(-96.0, 59.0)]]
        }
      }
    ]
};

var trophyGardenRegions = {
    'type': 'FeatureCollection',
    'features': [
        {
        'type': 'Feature',
        'properties': {
            'name': "Trophy Garden",
            'world': 'Overworld',
            'Pokémon': {
                "Grass": [{
                    "name": "Pikachu",
                    "area": "Grass",
                    "levels": "22, 24",
                    "rate": '10%',
                }, {
                    "name": "Pichu",
                    "area": "Grass",
                    "levels": "21-22",
                    "rate": '30%',
                }, {
                    "name": "Roselia",
                    "area": "Grass",
                    "levels": "22-23",
                    "rate": '30%',
                }, {
                    "name": "Staravia",
                    "area": "Grass",
                    "levels": ['22, 24', '22-24', '24'],
                    "rate": ['20%', '30%', '10%'],
                }, {
                    "name": "Kricketune",
                    "area": "Grass",
                    "levels": ['23', '0', '22-23'],
                    "rate": ['10%', '0%', '20%'],
                }, ],
            },
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': [[getCordfromLoc(-95.0, 39.0), getCordfromLoc(-414.0, 39.0), getCordfromLoc(-414.0, 471.0), getCordfromLoc(-95.0, 471.0), getCordfromLoc(-95.0, 39.0)]]
        }
      }
    ]
};