const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
};

const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
};

const calculateTripDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return duration >= 0 ? duration : 0;
};

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const sanitizeInput = (input) => {
    return input.replace(/<[^>]*>/g, '');
};

export {
    generateRandomId,
    formatDate,
    calculateTripDuration,
    isValidEmail,
    sanitizeInput
};