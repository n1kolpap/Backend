# TripTrail API

## Overview
TripTrail is a RESTful API designed to help users create, manage, and edit trip plans. The API allows users to sign up, log in, create trip plans, manage daily activities, and more.

## Features
- User authentication (sign up and login)
- Create and manage trip plans
- Add and remove activities from daily plans
- View daily plans with scheduled activities

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (for production use)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/triptrail-api.git
   ```
2. Navigate to the project directory:
   ```
   cd triptrail-api
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and set the following environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=your_desired_port
   ```

2. You can refer to the `.env.example` file for a template.

### Running the Application
To start the server, run:
```
npm start
```
The API will be available at `http://localhost:your_desired_port`.

## API Documentation
Refer to the OpenAPI specification for detailed information on the available endpoints, request/response formats, and error handling.

## Directory Structure
- `src/models`: Contains Mongoose models for User, TripPlan, DailyPlan, and Activity.
- `src/routes`: Defines the API routes for users, trip plans, daily plans, and activities.
- `src/controllers`: Contains the logic for handling requests and responses.
- `src/services`: Implements business logic for user and trip plan operations.
- `src/middleware`: Includes authentication, validation, error handling, and logging middleware.
- `src/config`: Configuration files for database connection and constants.
- `src/utils`: Utility functions for responses, validation, and other helper functions.
- `src/app.js`: Initializes the Express application and sets up middleware and routes.
- `src/server.js`: Entry point for starting the server.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.