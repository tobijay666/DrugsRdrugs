# DrugsRDrugs

A web application designed for pharmacists to manage medications and users to track drug usage. The application enables pharmacists to perform CRUD operations on medications and allows users to interact with the platform for better patient care. The project is containerized using Docker and features a CI/CD pipeline with Jenkins & GitHub Actions both.

## Features

**Pharmacist Dashboard:** Perform CRUD operations on medications (add, edit, delete).
**User Dashboard:** Select medications from available options.
**Authentication:** Role-based authentication (Pharmacist and User).
**Responsive Design:** Built with Bootstrap 4 for a clean and minimalistic UI.
**CI/CD Pipeline:** Jenkins & GitHub Actions workflow for building and pushing Docker images.
**Dockerized:** Easily deployable using Docker.

## Project Structure

### Frontend

frontend/
├── components/
├── Auth/ # Login and Signup components
├── Dashboard/ # Dashboard components for CRUD operations
└── Shared/ # Reusable components like Navbar and Footer
├── pages/
├── Home/ # Homepage with hero and info sections
├── Login.js # Login page
├── Signup.js # Signup page
└── Dashboard.js # Pharmacist Dashboard
├── routes/
└── RoutesComponent.js # Route definitions
├── services/
├── authService.js # Authentication services
└── medicationService.js # CRUD services for medications
└── App.js # Main application file

### Backend

backend/
├── controllers/ # Handles business logic for routes
└── medicationController.js
├── models/ # Mongoose schemas for MongoDB
└── Medication.js
├── routes/ # API route definitions
├── authRoutes.js
└── medicationRoutes.js
├── config/ # Configuration files
└── db.js # MongoDB connection
├── middleware/ # Middleware for authentication
└── authMiddleware.js
├── index.js # Main entry point
└── Dockerfile # Backend Dockerfile

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone [https://github.com/tobijay666/DrugsRdrugs.git](https://github.com/tobijay666/DrugsRdrugs.git)
cd DrugsRdrugs
```

## Run Locally with Docker

Build and Run Containers:

```bash
. up.sh

# OR

docker-compose up --build
```

## Access the application:

- Frontend: http://localhost:81
- Backend API: http://localhost:82

## API Endpoints

**Authentication**

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate a user.

**Medications**

- `GET /api/medications`: Fetch all medications.
- `POST /api/medications`: Add a new medication.
- `PUT /api/medications/:id`: Update a medication.
- `DELETE /api/medications/:id`: Delete a medication.

## CI/CD Pipeline

**GitHub Actions Workflow**

The CI/CD pipeline is defined in `.github/workflows/docker-build-and-push.yml` and performs the following:

- Builds separate Docker images for frontend and backend.
- Publishes the images to Docker Hub for deployment.

## Technologies Used

**Frontend**

- React
- Bootstrap 4

**Backend**

- Node.js
- Express
- MongoDB

**DevOps**

- Docker
- GitHub Actions

## Contributing

Contributions are welcome! Follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to the contributors and the community for making this project possible.
