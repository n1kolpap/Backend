# TripTrail API

A production-ready RESTful API for managing trip plans, daily schedules, and activities. Built with Node.js, Express, and MongoDB with support for mock data fallback.

## 🚀 Features

- **User Management**: Registration and JWT-based authentication
- **Trip Planning**: Create, read, update, and delete trip plans
- **Daily Plans**: Organize activities by day within trip plans
- **Activity Management**: Add and remove activities from daily plans
- **Budget Tracking**: Set and manage trip budgets
- **Mock Data Mode**: Automatic fallback to in-memory data when database is unavailable
- **Standardized Responses**: Consistent API response format
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: All requests are logged with timestamps

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional - falls back to mock data if not available)

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/n1kolpap/Backend.git
   cd Backend/triptrail-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   DATABASE_URI=mongodb://localhost:27017/triptrail  # Optional
   JWT_SECRET=your_jwt_secret
   PORT=5000
   NODE_ENV=development
   DEBUG=true
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
triptrail-api/
├── src/
│   ├── config/
│   │   ├── constants.js      # Configuration constants
│   │   ├── database.js       # Database connection
│   │   └── mockData.js       # Mock data for testing
│   ├── controllers/          # Request handlers
│   │   ├── userController.js
│   │   ├── tripPlanController.js
│   │   ├── dailyPlanController.js
│   │   └── activityController.js
│   ├── middleware/           # Custom middleware
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   └── validationMiddleware.js
│   ├── models/              # Mongoose models
│   │   ├── User.js
│   │   ├── TripPlan.js
│   │   ├── DailyPlan.js
│   │   └── Activity.js
│   ├── routes/              # Route definitions
│   │   ├── index.js
│   │   ├── userRoutes.js
│   │   ├── tripPlanRoutes.js
│   │   ├── dailyPlanRoutes.js
│   │   └── activityRoutes.js
│   ├── services/            # Business logic
│   │   ├── userService.js
│   │   ├── tripPlanService.js
│   │   └── dailyPlanService.js
│   ├── utils/               # Helper functions
│   │   ├── helpers.js
│   │   ├── responses.js
│   │   └── validators.js
│   ├── app.js              # Express app setup
│   └── server.js           # Server entry point
├── .env.example            # Environment variables template
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── test-api.sh           # API testing script
└── README.md             # This file
```

## 🔌 API Endpoints

### Health Check
- `GET /health` - Check API health status

### User Management
- `POST /user` - Create a new user
- `PUT /user/login` - User login

### Trip Plans
- `POST /user/:userId/tripPlan` - Create a trip plan
- `GET /user/:userId/tripPlan/:tripId` - Get trip plan details
- `PUT /user/:userId/tripPlan/:tripId` - Update trip plan
- `DELETE /user/:userId/tripPlan/:tripId` - Delete trip plan

### Daily Plans
- `GET /user/:userId/tripPlan/:tripId/dailyPlan` - Get all daily plans for a trip
- `POST /user/:userId/tripPlan/:tripId/dailyPlan` - Create a daily plan
- `PUT /user/:userId/tripPlan/:tripId/dailyPlan/:date` - Update daily plan
- `DELETE /user/:userId/tripPlan/:tripId/dailyPlan/:date` - Delete daily plan

### Activities
- `POST /user/:userId/tripPlan/:tripId/dailyPlan/:date/activity` - Add activity
- `DELETE /user/:userId/tripPlan/:tripId/dailyPlan/:date/activity/:activityId` - Remove activity

## 📝 API Usage Examples

### Create User
```bash
curl -X POST http://localhost:5000/user \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securepassword"
  }'
```

### User Login
```bash
curl -X PUT http://localhost:5000/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securepassword"
  }'
```

### Create Trip Plan
```bash
curl -X POST http://localhost:5000/user/1/tripPlan \
  -H "Content-Type: application/json" \
  -d '{
    "origin": "New York",
    "destination": "Los Angeles",
    "startDate": "2024-06-01",
    "endDate": "2024-06-10",
    "budget": 2000
  }'
```

### Get Daily Plans
```bash
curl http://localhost:5000/user/1/tripPlan/1/dailyPlan
```

### Add Activity
```bash
curl -X POST http://localhost:5000/user/1/tripPlan/1/dailyPlan/2024-06-02/activity \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Visit Museum",
    "location": "Getty Center",
    "day": "2024-06-02",
    "time": "10:00"
  }'
```

## 🧪 Testing

Run the automated test script:
```bash
./test-api.sh
```

This will test all API endpoints and report results.

## 📊 Response Format

All API responses follow this standardized format:

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (development mode only)"
}
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. After logging in, include the token in the Authorization header:

```bash
Authorization: Bearer <your-token-here>
```

## 🎨 Features & Architecture

- **ES6 Modules**: Modern JavaScript with import/export
- **Async/Await**: Clean asynchronous code
- **Try-Catch**: Comprehensive error handling in controllers
- **JSDoc Comments**: Detailed function documentation
- **Mongoose Models**: Structured data modeling
- **Middleware Chain**: Logging, authentication, validation, error handling
- **Service Layer**: Separation of business logic
- **Mock Data Fallback**: Works without database connection

## 🐳 Mock Data Mode

If MongoDB is not available, the API automatically switches to mock data mode:

- Pre-populated with sample users, trip plans, and activities
- Fully functional CRUD operations
- Data persists in memory during server runtime
- Perfect for development and testing

**Default Mock Users:**
- Email: `john@example.com`, Password: `password123`
- Email: `jane@example.com`, Password: `password456`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run in development mode with auto-reload
npm run dev

# Run in production mode
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Built with ❤️ by the TripTrail Team