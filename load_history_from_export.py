#!/usr/bin/env python3

import os
import sys
import shutil

def main(export_base_path, channel, dest):
    channel_path = os.path.join(export_base_path, channel)
    channel_filename = channel + '.json'
    print('load export from', channel_path, 'store it in', dest)
    for (dirpath, _dirnames, filenames) in os.walk(channel_path):
        for filename in filenames:
            file_path = os.path.join(dirpath, filename)
            (year, month, day) = filename.split('.')[0].split('-')
            parent_dir_path = os.path.join(dest, year, month.lstrip("0"), day.lstrip("0"))

            if not os.path.isdir(parent_dir_path):
                os.makedirs(parent_dir_path)

            dest_path = os.path.join(parent_dir_path, channel_filename)
            print("copying", file_path, 'to', dest_path)
            shutil.copyfile(file_path, dest_path)

main(sys.argv[1], sys.argv[2], sys.argv[3])
