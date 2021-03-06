 
# --- Build UI ---

FROM node:9.4.0-alpine as client
ENV SASS_BINARY_NAME linux-x64-59
WORKDIR /usr/app/src/
COPY package*.json ./
RUN npm install -qy
COPY . .
RUN npm run build

# --- Setup UI server

FROM node:9.4.0-alpine as server
RUN apk --no-cache add curl
WORKDIR /usr/app/server/
COPY --from=client /usr/app/src/dist/ ./dist
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

EXPOSE 3000

CMD ["npm", "start"]