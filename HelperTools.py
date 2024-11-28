import shutil, os
from os import listdir
from os.path import join
from wand.image import Image


def make_dir(path):
    """custom mkdir"""
    if not os.path.exists(path):
        os.makedirs(path)


def ImageToTileset(source, dest):
    # see if directory already exists
    if not os.path.exists(source):
        print("Source image does not exist")
        return
    make_dir(dest)
    print("Exporting multiple sizes of your source image...")
    maps_path = join(dest, "maps")
    make_dir(maps_path)
    ImageToSizes(source, dest)
    sizes = sorted(listdir(maps_path))
    grid_path = join(dest, "grid")
    make_dir(grid_path)
    print("Converting each size into a Tileset...")
    for i in sizes:
        size = len(sizes) - int(i[: i.rfind(".")])
        print("Creating grid for zoom level " + str(size))
        source_path = join(maps_path, i)
        # this is jank but we need to get width to GridToTileset
        path_to_grid_done = join(dest, str(size))
        if os.path.exists(path_to_grid_done) and len(listdir(path_to_grid_done)) > 0:
            print("Grid already done")
            continue
        width = ImageToGrid(source_path, grid_path)
        folder_path = join(dest, str(size))
        make_dir(folder_path)
        print("Arranging grid into directory")
        dest_path_sized = join(dest, str(size))
        GridToTileset(grid_path, dest_path_sized, int(width / 256))
    print("Done!")


# explort multiple sizes of a source image
def ImageToSizes(source, dest):
    print(f"Exporting {source}")
    if len(listdir(join(dest, "maps"))) > 0:
        print("Already exported")
        return
    with Image(filename=source) as img:
        dim = (img.size[0] * 2, img.size[1] * 2)
        ind = 0
        while dim[0] % 256 == 0 and dim[1] % 256 == 0:
            output_path = join(dest, "maps", str(ind) + ".png")
            if os.path.exists(output_path):
                print(f"Skipping {output_path}")
                ind = ind + 1
                dim = (int(dim[0] / 2), int(dim[1] / 2))
                continue
            print("Exporting size " + str(ind))
            # export each smaller version
            with img.clone() as i:
                i.resize(dim[0], dim[1], filter="point")  # nearest neighbor filter
                i.save(filename=output_path)
                pass
            dim = (int(dim[0] / 2), int(dim[1] / 2))
            ind = ind + 1


# split image into 256x256 sub-images
def ImageToGrid(source, dest):
    with Image(filename=source) as img:
        i = 0
        for h in range(0, img.size[1], 256):
            for w in range(0, img.size[0], 256):
                output_path = join(dest, f"{i:06d}.png")
                if os.path.exists(output_path):
                    print(f"Skipping {output_path}")
                    i = i + 1
                    continue
                w_end = w + 256
                h_end = h + 256
                with img[w:w_end, h:h_end] as tile:
                    tile.save(filename=output_path)
                i = i + 1
        return img.size[0]


# arrange a folder of grid images into a tileset
def GridToTileset(source, dest, width):
    files = sorted(listdir(source))
    ptr = 0
    ptr2 = -1
    for f in files:
        if ptr == 0:
            ptr2 = ptr2 + 1
            make_dir(join(dest, str(ptr2)))
        shutil.move(join(source, f), join(dest, str(ptr2), str(ptr) + ".png"))
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


if __name__ == "__main__":
    from multiprocessing import Pool
    from sys import argv

    # https://golb.n4n5.dev/python
    def multi_process(my_func, my_args, num_processes=10):
        """my_args is a table of arguments for my_func"""
        results = []

        with Pool(processes=num_processes) as pool:
            for result in pool.imap(my_func, my_args):
                results.append(result)

        return results

    def wrapper_to_tileset(args_of_func):
        """wrapper to call ImageToTileset with a single argument"""
        return ImageToTileset(args_of_func[0], args_of_func[1])

    args = [
        [
            join("maps", one_map),
            join("public", "tilesets", one_map[: one_map.rfind(".")].lower()),
        ]
        for one_map in sorted(listdir("maps"))
    ]
    if len(argv) > 1:
        multi_process(wrapper_to_tileset, args, num_processes=int(argv[1]))
    else:
        # single process - run in current process
        for arg in args:
            wrapper_to_tileset(arg)
