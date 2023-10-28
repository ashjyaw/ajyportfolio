FROM node:21.1.0-alpine AS builder


CMD ["node", "build/index.js"]