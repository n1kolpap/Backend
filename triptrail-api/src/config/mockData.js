/**
 * Mock data for development and testing without database
 * This data is used when MongoDB connection is not available
 * 
 * WARNING: These are demo credentials for development only.
 * In production, always use a proper database with secure password storage.
 */

export const mockUsers = [
    {
        userId: '1',
        username: 'john_doe',
        email: 'john@example.com',
        // Demo password: password123 (for development/testing only)
        password: '$2a$10$p.hECilDoOn5jXtDTdklWe38qmkY/qz73Cf.WafXQ8znVxTao/s1G'
    },
    {
        userId: '2',
        username: 'jane_smith',
        email: 'jane@example.com',
        // Demo password: password456 (for development/testing only)
        password: '$2a$10$tTtXYS8te0Hk3RAmnzEVPuNoR3d0laRRa7CqBOrO4GXmrPAyorln.'
    }
];

export const mockTripPlans = [
    {
        tripId: '1',
        userId: '1',
        origin: 'New York',
        destination: 'Los Angeles',
        startDate: '2024-06-01',
        endDate: '2024-06-10',
        budget: 1500,
        activities: []
    },
    {
        tripId: '2',
        userId: '2',
        origin: 'Chicago',
        destination: 'Miami',
        startDate: '2024-07-15',
        endDate: '2024-07-20',
        budget: 1200,
        activities: []
    }
];

export const mockDailyPlans = [
    {
        tripId: '1',
        date: '2024-06-02',
        activities: [
            {
                activityId: 'act-1',
                name: 'Morning Museum Visit',
                location: 'Getty Center',
                day: '2024-06-02',
                time: '09:00'
            }
        ]
    },
    {
        tripId: '2',
        date: '2024-07-16',
        activities: [
            {
                activityId: 'act-2',
                name: 'Beach Day',
                location: 'Miami Beach',
                day: '2024-07-16',
                time: '11:00'
            }
        ]
    }
];

export const mockActivities = [
    {
        activityId: '1',
        tripId: '1',
        name: 'Visit Hollywood',
        location: 'Hollywood, CA',
        day: '2024-06-03',
        time: '10:00'
    },
    {
        activityId: '2',
        tripId: '2',
        name: 'Beach Day',
        location: 'Miami Beach, FL',
        day: '2024-07-17',
        time: '11:00'
    }
];