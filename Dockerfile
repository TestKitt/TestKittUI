FROM node:latest

RUN mkdir -p /usr/src/testkittui
WORKDIR /usr/src/testkittui

COPY package.json /usr/src/testkittui/
#RUN npm install --production
ADD bin /usr/src/testkittui/bin
ADD build /usr/src/testkittui/build
ADD config /usr/src/testkittui/config
ADD dist /usr/src/testkittui/dist
ADD server /usr/src/testkittui/server

CMD [ "node", "/usr/src/testkittui/bin/server.js" ]