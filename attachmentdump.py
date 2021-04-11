#!/usr/bin/env python3
import os
import sys
import time
import json
import glob

from urllib.request import Request, urlopen

def download_slack_file(url, file_name, token, output_path):
    prefix = file_name[:3]
    parent_dir = os.path.join(output_path, prefix)
    path = os.path.join(parent_dir, file_name)
    if os.path.exists(path):
        print("file exists, skiping")
        return False
    else:
        os.makedirs(parent_dir, exist_ok=True)
        req = Request(url, headers={'Authorization': 'Bearer ' + token})
        resp = urlopen(req)
        with open(path, 'wb') as handle:
            handle.write(resp.read())

        return True

def download_attachment(file, msg, token, output_path):
    file_id = file["id"]
    file_type = file.get("filetype")
    file_ext = "." + file_type if file_type else ""
    file_name = file_id + file_ext
    url = file.get("url_private_download", file.get("url_private"))

    if url:
        print("downloading", url, "to", file_name, "token", token)
        if download_slack_file(url, file_name, token, output_path):
            time.sleep(15)
    else:
        print("no url", file)


def main(files_glob, handler):
    for path in glob.iglob(files_glob, recursive=True):
        #print(path)
        with open(path) as handle:
            for msg in json.load(handle):
                for file in msg.get('files', []):
                    handler(file, msg)


output_path = sys.argv[2]
token = sys.argv[3]
main(sys.argv[1], lambda file, msg: download_attachment(file, msg, token, output_path))
