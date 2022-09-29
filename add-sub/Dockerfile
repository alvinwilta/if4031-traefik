FROM node:16.17.1-alpine
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY ./src/ /app/
COPY ./tsconfig.json /app/
RUN npm run build
EXPOSE 30

CMD ["npm","start"]