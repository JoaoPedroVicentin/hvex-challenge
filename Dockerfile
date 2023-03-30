FROM node:alpine

RUN mkdir -p /user/app

WORKDIR /user/app

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]