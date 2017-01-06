FROM node:latest

RUN mkdir -p /usr/src/testkittui
WORKDIR /usr/src/testkittui

COPY package.json /usr/src/testkittui/
RUN npm install
COPY . /usr/src/testkittui/bin
COPY . /usr/src/testkittui/config
COPY . /usr/src/testkittui/server
#TODO Environment variables