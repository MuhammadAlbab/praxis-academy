#!/bin/bash
displayDir=$(tree /home/albab/Desktop/praxis-academy)
echo "$displayDir"
findProcess=$(find /home/albab/Desktop/praxis-academy -type f -name '*.java');
if [[ $findProcess ]]; then
getDir=${findProcess#*.}
echo "Ada file Java pada direktori: {$findProcess}"
fi