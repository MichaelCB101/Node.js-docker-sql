#use official Node.JS omage
FROM node:20
#set working dir in container
WORKDIR /app
#copy the package json and package locl
COPY package*.json ./
#Install dependancies
RUN npm install
#copy rest of app files 
COPY . .
#compile ts to js
RUN npm run build
#expose the port the app runs ok
EXPOSE 3000
#start the app
CMD ["node", "dist/server.js"]