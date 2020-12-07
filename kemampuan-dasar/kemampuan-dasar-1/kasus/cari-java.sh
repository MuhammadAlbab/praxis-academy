#!/bin/bash
proses=$(find /home/albab/Desktop/praxis-academy -type f -name '*.java');
if [ $proses ]; then
echo 'file java ada'
else
echo 'file java tidak ada'
fi