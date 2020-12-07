echo "Masukan nama program: "
read monggo
ps ax | grep $monggo | awk '{print $1}' 
kill `pidof $monggo`