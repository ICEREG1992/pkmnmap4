# pkmnmap4
A rip of <https://pkmnmap.com> updated to Generation 4 of the Pokémon series. Uses [Leaflet](https://leafletjs.com/) to generate an interactive map. Map assembled from resources from [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Category:Platinum_locations). Item locations sourced from [Techno Trainer's video series](https://youtube.com/playlist?list=PLDHidtsnukfIVS-VhbJRuxHVfKgmPduIE&si=agUfWjlSWxbYmLkX). Without these resources and the original code from [Jaxson Keenes](https://www.jaxsonkeenes.com/) this project would not exist.

The site is available at <https://pkmnmap4.web.app/>.

## how to generate a new tileset
1. Procure a high-resolution map of whatever you want to make a tileset out of. make sure the dimensions of the map image are easily halved, don't worry if you have to add a lot of whitespace
1. I've included my personal script for converting a large png into a tileset with multiple zoom levels in this respository as `ImageToTileset` in `HelperTools.py`. It will resize your map to the various zoom levels, and for each resize it will split the image into 256x256 pixel tiles which then get arranged into the proper directory structure for Leaflet to be able to render your map.
1. Install [ImageMagick](https://imagemagick.org/index.php) as a prerequisite for Wand
1. Install [Wand](https://docs.wand-py.org/en/0.6.12/) as a prerequisite for HelperTools.py
1. Run the following in your favorite Python interpreter:
```
from HelperTools import ImageToTileset
ImageToTileset(r"[path to your png map]", r"[directory you want the tileset to be placed]")
```
6. To see your new map, you can update the `shortname` of the Overworld map in maps.js to point to the tileset directory, just make sure to change `bounds` to be representative of your map's aspect ratio.

## how to create new regions
1. Open your final map png in an image editor like Paint.NET
1. Select the area you wish to turn into a clickable region
1. Make note of the following values: Selection top left coordinate, selection width and height.
1. Insert those values into my helper function:
```
from HelperTools import Translate
Translate(x, y, w, h)
```
5. Copy and paste the output into the "coordinates" property of a feature in one of the vector js files.
    Note: `Translate()` will likely not work depending on the size of your map. You can try `TranslateScale(s, x, y, w, h)` which takes scale parameter `s`, `Translate()` uses a scale factor of 16 so if your regions come out at half size try halving the scale factor (Larger scale factor = smaller regions).

## how to create new interiors
1. Create a new tileset for your map using the above steps
1. Add your map's information to `maps.js`
1. Add region data to the variable you defined in the map's information
1. Add marker data for your interior using `markerSet(y, x, name, icon, mapname, [return location])`
    - return location is optional and intended for entrances, but should be a two element array that looks like `[[y, x], zoom]`.
    - return location determines where the camera should be centered when you enter the map. if no return location is specified, the camera is perfectly centered on the whole map.
1. Finally, add an entrance marker to the overworld with the name matching the new map's name.