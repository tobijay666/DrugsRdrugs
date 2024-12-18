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

# 30/11

## a GitIgnore added to the backend.

## Navbar Created i the frontend.

## maintained proper folder structure.

# 3/12

## Backend Development Steps

1. Set up user roles and schema:

- Create a User model in the models/ folder with fields for role, username, email, password, etc.

2. User registration and login routes:

- Add routes in the routes/ folder for registering a user and logging in.
- Use bcrypt for password hashing.

3. JWT-based authentication:

- Create a middleware in the middleware/ folder to validate tokens and extract user roles.

4. Role-based access control middleware:

- Develop a middleware that checks if a user has permission to access a specific route based on their role.

5. Testing the endpoints:

- Verify endpoints for registering users, logging in, and accessing protected routes with specific roles.

## Docker - compose yaml updated

## Backend mongo created

## User model created.

# 6/12

## Registration and Login Development

### Backend Development

1. Registration Endpoint

   - Created a secure registration endpoint.
   - Used bcrypt to hash passwords before saving them in the database.
   - Verified the functionality using POSTMAN.

2. Login Endpoint

   - Created a login endpoint to authenticate users.
   - Implemented JWT generation on successful login.

3. Debugged authentication issues:
   - Verified password hashing during registration and storage in the database.
   - Used bcrypt.compare() to match plain text and hashed passwords.

## Debugging the Login Endpoint

### Issue Identified:

- bcrypt.compare() returned false even for matching passwords.

### Debugging Steps Taken:

- Logged plain text password and hashed password during registration.
- Verified passwords retrieved from the database during login.
- Confirmed that passwords were being re-hashed during registration, leading to a mismatch.

### Fix Applied:

- Ensured password hashing happens only once during registration.
- Verified hashed passwords remain consistent in the database and during login.

# 9/12

### Login & Signup Created.

# 10/12

### Restructured the Folder structure

- Unsatisfied with the Folder structure.
- changed to this.

frontend/
│
├── src/
│ ├── components/
│ │ ├── Navbar/ # Existing component
│ │ ├── Footer/ # Existing component
│ │ ├── Auth/ # Auth components
│ │ │ ├── Login.js
│ │ │ ├── Signup.js
│ │ │ ├── Auth.css # Styles for both components
│ │ ├── services/ # API services related to authentication
│ │ │ ├── authService.js
│ │ ├── routes/ # New folder for routing logic
│ │ │ ├── RoutesComponent.js
│ │ ├── App.js # Main application file
│ │ ├── index.js # React entry point
│ │
│ ├── build/ # Output directory for React build
│ │
│── Dockerfile
│── docker-compose.yml

# 11/12

- minor bugs fixed.

# 16/12

1. Backend:

- Organized into modular structure:
- Config: db.js handles MongoDB configuration.
- Controllers: Controller logic for handling routes, e.g., helloController.js.
- Models: Database schema definitions (e.g., User.js).
- Routes:
  - authRoutes.js & authDebugRoutes.js: Handle authentication endpoints.
  - helloRoutes.js: Example/test routes.
- Environment Management: .env file for sensitive configuration (e.g., MONGO_URI, JWT_SECRET).
- Main entry point: index.js with a clean setup for routes, middlewares, and configurations.
- Dockerization:
  - startup.sh automates dependency installation and server startup.

2. Frontend:

- React app structured into clear layers:
  - Components: Reusable UI components (e.g., Navbar, Footer).
  - Pages: Separate pages like Login, Signup.
  - Routes: Centralized route definitions in RoutesComponent.js.
  - Services: API calls and utility functions for consistent backend interaction.
  - Proper routing setup using react-router-dom.
  - Production Build:
    - build directory for deployment-ready frontend assets.
  - Styling:
    - Centralized styles in App.css.

4. Key Fixes and Features Implemented:

- Resolved routing issues (BrowserRouter duplication errors).
- Fixed 404 errors for static file serving in Dockerized Nginx.
- Centralized API endpoints using environment variables.
- Component-based design for maintainability (Navbar, Footer).
- Backend RESTful API designed with JWT-based authentication.

- Containerization:

  - Multi-container Docker setup with docker-compose.yaml:
  - Backend (Node.js + MongoDB).
  - Frontend (Nginx serving React build).

# 17/12

Color Theme Note:
The color theme for the application includes:

Primary Colors: Regal deep blue (#001F54), elegant gold (#FFD700).
Secondary Colors: Soft gray (#F4F4F4) for backgrounds, and white (#FFFFFF) for text.
Accent Colors: Muted red (#C41E3A) for error messages or highlights, and light teal (#4ABDAC) for active links and buttons.

## Home page created. Updated File structure:

frontend/
├── components/
│ ├── Navbar/
│ │ └── Navbar.js
│ │ └── Navbar.css
│ ├── Footer/
│ │ └── Footer.js
│ │ └── Footer.css
│ └── Home/
│ ├── HeroSection.js
│ ├── WhatWeDoSection.js
│ ├── HeroSection.css
│ ├── WhatWeDoSection.css
├── pages/
│ └── Home/
│ ├── Home.js
│ ├── Home.css
├── routes/
│ └── RoutesComponent.js
├── services/
│ └── homepageService.js
└── App.js

# 18/12

## Things needs to be done.

1. adding a link to the navbar to redirect to the login page.
1. ii. login interface should be updated so that we can redirect to signup page as well.
1. creating a dashboard for the pharmacist.
1. the dash board should have the functionality of CRUD operations for Drugs. where name, dosage, and quantity are used as parameters.

Updated the folder sturcture.
src/
├── components/
├── pages/
├── routes/
├── styles/
│ ├── colors.css
│ ├── demo.css
├── App.js
├── index.js

Changes Made
Frontend:

Improved error handling to display detailed backend validation messages.
Backend:

Added field-specific validations with express-validator:
Email: Must be a valid email.
Password: Minimum 6 characters.
Username: Cannot be empty.
Returned the first validation error as the response for better user feedback.
Security Enhancements:

Used bcrypt for hashing passwords.
Limited JWT validity to 1 hour for improved security.
Let me know if you need further adjustments or explanations!
