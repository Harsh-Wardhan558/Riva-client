# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy all source code
COPY . .

# Explicitly verify firebase-service-account.json is present
RUN if [ ! -f firebase-service-account.json ]; then echo "ERROR: firebase-service-account.json not found!" && exit 1; fi && echo "✅ firebase-service-account.json found"

# Expose the port Cloud Run will use
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Cloud Run sets PORT=8080 automatically, but set as default
ENV PORT=8080

# Start the app
CMD ["node", "server.js"]
