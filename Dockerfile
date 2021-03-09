FROM node:14-slim

WORKDIR /usr/src/blog

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# remove dev dependencies
RUN npm prune --production

EXPOSE 3000

CMD ["npm", "run", "start"]