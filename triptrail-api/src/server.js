import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';
import { PORT } from './config/constants.js';

dotenv.config();

const port = PORT || 5000;
let useMockData = false;

/**
 * Start the server with MongoDB connection or fallback to mock data
 */
const startServer = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI;
        
        if (mongoURI && mongoURI !== '') {
            try {
                await mongoose.connect(mongoURI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
                console.log('✓ Connected to MongoDB');
                console.log('✓ Using database for data persistence');
            } catch (dbError) {
                console.warn('⚠ Failed to connect to MongoDB:', dbError.message);
                console.log('✓ Falling back to mock data mode');
                useMockData = true;
            }
        } else {
            console.log('⚠ No MongoDB URI provided');
            console.log('✓ Using mock data mode');
            useMockData = true;
        }
        
        // Make useMockData available to the app
        app.set('useMockData', useMockData);
        
        app.listen(port, () => {
            console.log('\n╔═══════════════════════════════════════════════╗');
            console.log('║       TripTrail API Server Started 🚀       ║');
            console.log('╚═══════════════════════════════════════════════╝');
            console.log(`\n✓ Server is running on http://localhost:${port}`);
            console.log(`✓ Mode: ${useMockData ? 'Mock Data' : 'Database'}`);
            console.log(`✓ Health check: http://localhost:${port}/health`);
            console.log('\nAvailable endpoints:');
            console.log('  POST   /user                                  - Create user');
            console.log('  PUT    /user/login                            - User login');
            console.log('  POST   /user/:userId/tripPlan                 - Create trip plan');
            console.log('  GET    /user/:userId/tripPlan/:tripId         - Get trip plan');
            console.log('  PUT    /user/:userId/tripPlan/:tripId         - Update trip plan');
            console.log('  DELETE /user/:userId/tripPlan/:tripId         - Delete trip plan');
            console.log('  GET    /user/:userId/tripPlan/:tripId/dailyPlan - Get daily plans');
            console.log('\n');
        });
    } catch (error) {
        console.error('✗ Fatal error starting server:', error);
        process.exit(1);
    }
};

startServer();