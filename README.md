# pkmnmap4
A rip of <https://pkmnmap.com> updated to Generation 4 of the Pokémon series. Uses [Leaflet](https://leafletjs.com/) to generate an interactive map.

# how to generate a new tileset
1. procure a high-resolution map of whatever you want to make a tileset out of. make sure the dimensions of the map image are very square, don't worry if you have to add a lot of whitespace
1. export the map image repeatedly, halving resolution each time
1. generate one final map with double resolution
1. install [ImageMagick](https://imagemagick.org/index.php)
1. for each exported map image, run the following, where A and B are the image's dimensions divided by 256:
```
magick convert "[map path]" -crop AxB@ +repage +adjoin "[temp path]"
```
6. this will slice your map image into the tiles that you need for your tile set. now you need to assemble them into a directory. you can do this with the "rename" function included in this repository. run the following:
```
from rename import rename
rename(r'[temp path]', r'[tileset path for this zoom level]', [how many tiles wide your image is])
```
7. now you have a set of images for one zoom level. repeat the previous two steps for as many zoom levels as you have.
