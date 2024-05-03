import shutil, os
from wand.image import Image
def ImageToTileset(source, dest):
    # see if directory already exists
    if not os.path.exists(dest):
        os.mkdir(dest)
    print("Exporting multiple sizes of your source image...")
    os.mkdir(dest+'\\maps')
    ImageToSizes(source, dest)
    sizes = os.listdir(dest+'\\maps')
    os.mkdir(dest+'\\grid')
    print("Converting each size into a Tileset...")
    for i in sizes:
        size = len(sizes) - int(i[:i.rfind('.')])
        print("Creating grid for zoom level " + str(size))
        width = ImageToGrid(dest+'\\maps\\'+i, dest+'\\grid\\') #this is jank but we need to get width to GridToTileset
        os.mkdir(dest+'\\'+str(size))
        print("Arranging grid into directory")
        GridToTileset(dest+'\\grid', dest+'\\'+str(size), int(width/256))
    print("Done!")

# explort multiple sizes of a source image
def ImageToSizes(source, dest):
    with Image(filename=source) as img:
        dim = (img.size[0] * 2, img.size[1] * 2)
        ind = 0
        while (dim[0] % 256 == 0 and dim[1] % 256 == 0):
            print("Exporting size " + str(ind))
            #export each smaller version
            with img.clone() as i:
                i.resize(dim[0], dim[1], filter='point') # nearest neighbor filter
                i.save(filename=dest+'\\maps\\'+str(ind)+'.png')
                pass
            dim = (int(dim[0]/2), int(dim[1]/2))
            ind = ind + 1

# split image into 256x256 sub-images
def ImageToGrid(source, dest):
    with Image(filename=source) as img:
        i = 0
        for h in range(0, img.size[1], 256):
            for w in range(0, img.size[0], 256):
                w_end = w + 256
                h_end = h + 256
                with img[w:w_end, h:h_end] as tile:
                    tile.save(filename=dest+'{:06d}.png'.format(i))
                i = i + 1
        return img.size[0]

# arrange a folder of grid images into a tileset
def GridToTileset(source, dest, width):
    files = os.listdir(source)
    ptr = 0
    ptr2 = -1
    for f in files:
        if ptr == 0:
            ptr2 = ptr2 + 1
            os.mkdir(dest+'\\'+str(ptr2))
        shutil.move(source+'\\'+f, dest+'\\'+str(ptr2)+'\\'+str(ptr)+'.png')
        ptr = ptr + 1
        ptr = ptr % width

def Translate(x, y, w, h):
    x1 = (x / 16) - 1
    y1 = -((y / 16) - 1)
    w = w / 16
    h = h / 16
    x2 = x1 + w
    y2 = y1 - h
    return f"[[getCordfromLoc({y1}, {x1}), getCordfromLoc({y2}, {x1}), getCordfromLoc({y2}, {x2}), getCordfromLoc({y1}, {x2}), getCordfromLoc({y1}, {x1})]]"
    # [[getCordfromLoc(-234.0625, 207.5), getCordfromLoc(-262.5625, 207.5), getCordfromLoc(-262.5625, 239.5), getCordfromLoc(-234.0625, 239.5), getCordfromLoc(-234.0625, 207.5)]]

def TranslateScale(s, x, y, w, h):
    x1 = (x / s) - 1
    y1 = -((y / s) - 1)
    w = w / s
    h = h / s
    x2 = x1 + w
    y2 = y1 - h
    return f"[[getCordfromLoc({y1}, {x1}), getCordfromLoc({y2}, {x1}), getCordfromLoc({y2}, {x2}), getCordfromLoc({y1}, {x2}), getCordfromLoc({y1}, {x1})]]"
    # [[getCordfromLoc(-234.0625, 207.5), getCordfromLoc(-262.5625, 207.5), getCordfromLoc(-262.5625, 239.5), getCordfromLoc(-234.0625, 239.5), getCordfromLoc(-234.0625, 207.5)]]