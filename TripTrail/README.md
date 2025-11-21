# TripTrail API

## Description
TripTrail is a RESTful API designed to help users create, manage, and edit their trip plans. The API allows users to generate trip plans based on their preferences, view daily activities, and collaborate with others.

## Features
- User registration and authentication
- Create, update, and delete trip plans
- View daily plans with scheduled activities
- Add and remove activities from daily plans
- Set and manage trip budgets
- Save favorite activities for future reference

## Project Structure
```
TripTrail
├── package.json
├── .env.example
├── .gitignore
├── models
│   ├── User.js
│   ├── TripPlan.js
│   ├── DailyPlan.js
│   └── Activity.js
├── routes
│   ├── index.js
│   ├── user.js
│   ├── tripPlan.js
│   └── dailyPlan.js
├── controllers
│   ├── userController.js
│   ├── tripPlanController.js
│   └── dailyPlanController.js
├── services
│   ├── userService.js
│   ├── tripPlanService.js
│   └── dailyPlanService.js
├── middleware
│   ├── auth.js
│   ├── validation.js
│   ├── errorHandler.js
│   └── logger.js
├── config
│   ├── database.js
│   └── constants.js
├── utils
│   ├── responses.js
│   ├── validators.js
│   └── helpers.js
├── server.js
└── app.js
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/TripTrail.git
   ```
2. Navigate to the project directory:
   ```
   cd TripTrail
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file based on the `.env.example` template and configure your environment variables.

## Usage
1. Start the server:
   ```
   npm start
   ```
2. The API will be available at `http://localhost:3000`.

## API Endpoints
### User
- `POST /user`: Create a new user
- `PUT /user/login`: Log in a user

### Trip Plan
- `POST /user/{userId}/tripPlan`: Create a new trip plan
- `GET /user/{userId}/tripPlan/{tripId}`: Get trip plan by ID
- `PUT /user/{userId}/tripPlan/{tripId}`: Update trip plan by ID
- `DELETE /user/{userId}/tripPlan/{tripId}`: Delete trip plan

### Daily Plan
- `GET /user/{userId}/tripPlan/{tripId}/dailyPlan`: View daily plan
- `POST /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}/activity`: Add activity to daily plan
- `DELETE /user/{userId}/tripPlan/{tripId}/dailyPlan/{date}/activity/{activityId}`: Remove activity from daily plan

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.