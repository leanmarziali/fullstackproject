# Use a lighter version of Node as a parent image
FROM node:8.7.0-alpine

# Create app directory
RUN mkdir -p /srv/app/admin-client
# Set the working directory
WORKDIR /srv/app/admin-client

# copy package.json into the container
COPY package*.json /srv/app/admin-client/

# install dependencies
RUN npm install

# Copy the current directory contents into the container
COPY . /srv/app/admin-client

# Run the app when the container launches
CMD ["npm", "start"]