# Use an ARM-compatible Node.js image
FROM node:21.1.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
# Copy the rest of the project files
COPY . .

# Install project dependencies
RUN npm cache clean -f
RUN npm install -g n
RUN n stable
RUN npm install


# Build your Vite project
RUN npm run build

# Expose the port that Vite serves on
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]