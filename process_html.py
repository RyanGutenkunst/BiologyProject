import os
from pathlib import Path

fnames = Path('').rglob('*.html')

for fname in fnames:
    command = 'sed -i "" "s/q.html/Q.html/g" {0}'.format(fname)
    os.system(command)

# Cold Fusion:
./human_bio/problem_sets/blood_types/inherited.html
./immunology/activities/AIDS2003/directions.html