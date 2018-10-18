# Use a lighter version of Node as a parent image
FROM node:8.7.0-alpine

# Create app directory
RUN mkdir -p /srv/app/admin-server
# Set the working directory
WORKDIR /srv/app/admin-server

# copy package.json into the container
COPY package*.json /srv/app/admin-server/

# install dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . /srv/app/admin-server

# Run the app when the container launches
# DEBUG=myapp:* -> Telling nodejs we want to turn on logging for debugging purposes. 
# Specify the command as a regular string (e.g. CMD grunt) in order to execute it with /bin/sh -c. 
#CMD "DEBUG=apirestful:* npm start"
CMD ["npm", "start"]

# Run Supertest apiTest before app startup
RUN ["npm", "run", "test"]