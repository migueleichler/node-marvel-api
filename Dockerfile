FROM node:12.18.1

WORKDIR /usr/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN echo "PWD is: $PWD"

CMD [ "node", "src/server.js" ]
