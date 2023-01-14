#!/bin/bash
if [ "$1" == "-h" ] || [ "$1" == "--help" ] ; then
    echo "Usage: ./setup_newpage.sh [new page name] [template name]"
    echo "Usage: ./setup_newpage.sh [-h/--helper]"
    exit 0
fi
pagename=$1
mode=$2
[[ -z "$pagename" ]] && { echo "[ERROR] Page name no provided, please input 1st arg."; exit 1; }
echo '[INFO] Pagename checked. '
[[ -z "$mode" ]] && { echo "[ERROR] Mode no provided, please input 2nd arg."; exit 1; }
echo '[INFO] Mode checked. '
csspath='assets/pages/'
htmlpath='public/pages/'
tspath='src/pages/'
refpath='templates/'$mode
[[ ! -d "$refpath" ]] && { echo "[ERROR] Template $refpath does not exist, please change 2nd arg."; exit 1; }
echo '[INFO] Template checked. '

match=$(find . -type d -name "$tspath$pagename")
echo "[INFO] $match"
[[ ! -z "$match" ]] && { echo "[ERROR] Page name $pagename was repeated, please provide another page name."; exit 1; }
echo '[INFO] Avoid repeated page checked. '

echo "[INFO] Plan to create files (FROM) $refpath (TO) $csspath$pagename $htmlpath$pagename $tspath$pagename ... "
echo "[INFO] mkdir -p $csspath$pagename $htmlpath$pagename $tspath$pagename"
echo "[INFO] cp $refpath/index.css $csspath$pagename"
echo "[INFO] cp $refpath/index.html $htmlpath$pagename"
echo "[INFO] cp $refpath/index.ts $tspath$pagename"
echo "[INFO] cp $refpath/index.model.ts $tspath$pagename"
echo "[INFO] cp $refpath/index.view.ts $tspath$pagename"
echo "[INFO] cp $refpath/index.control.ts $tspath$pagename"

read -p "[WARN] Do you want to proceed? ([y]es/[n]o) " yn

case $yn in 
	yes|y ) echo '[INFO] ok, we will proceed';
            mkdir $csspath$pagename $htmlpath$pagename $tspath$pagename;
            cp $refpath/index.css $csspath$pagename;
            cp $refpath/index.html $htmlpath$pagename;
            cp $refpath/index.ts $tspath$pagename;
            cp $refpath/index.model.ts $tspath$pagename;
            cp $refpath/index.view.ts $tspath$pagename;
            cp $refpath/index.control.ts $tspath$pagename;;
	no|n ) echo "[INFO] exiting...";
		exit;;
	* ) echo '[ERROR] invalid response';
		exit 1;;
esac

echo '[INFO] Files Created. '