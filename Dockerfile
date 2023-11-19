# Use an ARM-based Node.js image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install your project dependencies (including rebuilding native modules)
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your application
RUN npm run build

# Start your application
CMD ["npm", "start"]

