import os
from pathlib import Path

fnames = Path('').rglob('*.html')

for fname in fnames:
    command = 'sed -i "" "s/http:\/\/www.Pharmacy.Arizona.EDU\/centers\/tox_center\/swehsc\/index.html/https:\/\/swehsc.pharmacy.arizona.edu/g" {0}'.format(fname)
    os.system(command)
