const mockUsers = [
    {
        username: "john_doe",
        password: "password123",
        email: "john@example.com"
    },
    {
        username: "jane_smith",
        password: "securepassword",
        email: "jane@example.com"
    }
];

const mockTripPlans = [
    {
        tripId: "trip1",
        origin: "New York",
        destination: "Los Angeles",
        startDate: "2023-06-01",
        endDate: "2023-06-10",
        budget: 1500,
        activities: []
    },
    {
        tripId: "trip2",
        origin: "Chicago",
        destination: "Miami",
        startDate: "2023-07-15",
        endDate: "2023-07-20",
        budget: 1200,
        activities: []
    }
];

const mockDailyPlans = [
    {
        date: "2023-06-01",
        activities: []
    },
    {
        date: "2023-06-02",
        activities: []
    }
];

const mockActivities = [
    {
        activityId: "activity1",
        name: "Visit the Grand Canyon",
        location: "Grand Canyon National Park",
        day: "2023-06-03",
        time: "10:00 AM"
    },
    {
        activityId: "activity2",
        name: "Beach Day",
        location: "Santa Monica Beach",
        day: "2023-06-05",
        time: "11:00 AM"
    }
];

module.exports = {
    mockUsers,
    mockTripPlans,
    mockDailyPlans,
    mockActivities
};