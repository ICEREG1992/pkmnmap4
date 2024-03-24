import shutil, os
def rename(source, dest, width):
    files = os.listdir(source)
    ptr = 0
    ptr2 = 0
    os.mkdir(dest+'\\'+str(ptr2))
    for f in files:
        shutil.move(source+'\\'+f, dest+'\\'+str(ptr2)+'\\'+str(ptr)+'.png')
        ptr = ptr + 1
        ptr = ptr % width
        if ptr == 0:
            ptr2 = ptr2 + 1
            os.mkdir(dest+'\\'+str(ptr2))