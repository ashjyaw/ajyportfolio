FROM node:16 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build


# Expose port 80
EXPOSE 80


CMD ["node", "build"]