# Notes of Development

# !IMPORTANT - Temp.sh should be deleted

## front end

- npx create-react-app .
- npm install axios react-router-dom socket.io-client

## back end

- npm init -y
- npm install --save-dev express mongoose dotenv cors body-parser nodemon
- 27/11 - created a small script to see if everything is working

## Docker

- up and running.

# 28/11

## Folder structure backend

backend/
├── controllers/ # For handling business logic
│ └── helloController.js
├── routes/ # For defining API routes
│ └── helloRoutes.js
├── middleware/ # For reusable middlewares (e.g., error handling, authentication)
├── models/ # For database models (e.g., MongoDB schemas)
├── config/ # For configuration files (e.g., db.js for DB connection)
│ └── db.js
├── .env # Environment variables
├── index.js # Main entry point for the backend
├── package.json # Node.js dependencies
└── startup.sh # Script to start the backend

## front end folder structure updated

frontend/
├── src/
│ ├── components/ # Reusable components
│ ├── pages/ # Page-level components
│ ├── services/ # API call logic
│ ├── App.js # Main App component
│ └── index.js # React entry point
