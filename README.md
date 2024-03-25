# pkmnmap4
A rip of <https://pkmnmap.com> updated to Generation 4 of the Pokémon series. Uses [Leaflet](https://leafletjs.com/) to generate an interactive map.

# how to generate a new tileset
1. Procure a high-resolution map of whatever you want to make a tileset out of. make sure the dimensions of the map image are easily halved, don't worry if you have to add a lot of whitespace
1. I've included my personal script for converting a large png into a tileset with multiple zoom levels in this respository as ImgToTileset.py. It will resize your map to the various zoom levels, and for each resize it will split the image into 256x256 pixel tiles which then get arranged into the proper directory structure for Leaflet to be able to render your map.
1. install [ImageMagick](https://imagemagick.org/index.php)
1. install prerequisites for ImgToTileset.py:
    * shutil
    * os
    * wand
1. Run the following in your favorite Python interpreter:
```
from ImgToTileset import ImageToTileset
ImageToTileset(r"[path to your png map]", r"[directory you want the tileset to be placed]")
```
6. To see your new map, you can update Overworld.js to point to the tileset directory, just make sure to change `tileX` and `tileY` in main.js to be representative of your map's aspect ratio.
