FROM node:14-slim as BUILD_IMAGE

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# remove dev dependencies
RUN npm prune --production

FROM node:14-slim

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/package.json ./package.json
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /usr/src/app/.next ./.next
COPY --from=BUILD_IMAGE /usr/src/app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]