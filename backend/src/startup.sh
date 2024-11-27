# Navigate to the app directory
cd /usr/src/app || exit

# Install Node.js dependencies
if [ -f package.json ]; then
  echo "Installing Node.js dependencies..."
  npm install
fi

# Start the server
if [ -f src/index.js ]; then
  echo "Starting the Node.js server..."
  npm start
else
  echo "Node.js server entry point not found. Exiting."
  exit 1
fi