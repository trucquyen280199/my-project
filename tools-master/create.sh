#!/bin/bash

read -p "Enter Folder Project Name: "  projectName
if [ -n projectName ] 
then
    cp -R ./src/default ../$projectName/src;
    cp ./.gitignore ../$projectName;
    cp ./package.json ../$projectName;
    cp ./webpack.mix.js ../$projectName;
    cp ./tailwind.config.js ../$projectName;
    cp ./.env.example ../$projectName/.env;
    cp ./gulpfile.js ../$projectName;
    cd ../$projectName;
    yarn;
    yarn copy;
    mkdir -R ./public/assets/images;
    read -p "Are you want push now: " isPush;
    exit;
fi