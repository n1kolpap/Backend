const mockUsers = [
    {
        userId: '1',
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123'
    },
    {
        userId: '2',
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'password456'
    }
];

const mockTripPlans = [
    {
        tripId: '1',
        userId: '1',
        origin: 'New York',
        destination: 'Los Angeles',
        startDate: '2023-06-01',
        endDate: '2023-06-10',
        budget: 1500,
        activities: []
    },
    {
        tripId: '2',
        userId: '2',
        origin: 'Chicago',
        destination: 'Miami',
        startDate: '2023-07-15',
        endDate: '2023-07-20',
        budget: 1200,
        activities: []
    }
];

const mockDailyPlans = [
    {
        tripId: '1',
        date: '2023-06-02',
        activities: []
    },
    {
        tripId: '2',
        date: '2023-07-16',
        activities: []
    }
];

const mockActivities = [
    {
        activityId: '1',
        tripId: '1',
        name: 'Visit Hollywood',
        location: 'Hollywood, CA',
        day: '2023-06-03',
        time: '10:00 AM'
    },
    {
        activityId: '2',
        tripId: '2',
        name: 'Beach Day',
        location: 'Miami Beach, FL',
        day: '2023-07-17',
        time: '11:00 AM'
    }
];

export { mockUsers, mockTripPlans, mockDailyPlans, mockActivities };