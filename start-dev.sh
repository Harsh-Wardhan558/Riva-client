#!/bin/bash

# Bash script to start both client and server in development mode

echo "========================================"
echo "Starting Riva Recruitment Platform"
echo "========================================"
echo ""

# Check if node_modules exist
if [ ! -d "client/node_modules" ]; then
    echo "Installing client dependencies..."
    cd client
    npm install
    cd ..
fi

if [ ! -d "server/node_modules" ]; then
    echo "Installing server dependencies..."
    cd server
    npm install
    cd ..
fi

echo ""
echo "Starting development servers..."
echo ""

# Start server in background
echo "Starting backend server on port 5000..."
cd server
npm run dev &
SERVER_PID=$!
cd ..

# Wait a bit for server to start
sleep 3

# Start client
echo "Starting frontend on port 3000..."
cd client
npm run dev

# Cleanup on exit
trap "kill $SERVER_PID" EXIT

