FROM node

WORKDIR /usr/app/

COPY package.json /usr/app/package.json
COPY index.js /usr/app/index.js

RUN npm install

CMD ["node", "index.js"]
