module.exports = {
    /**
     * Generates a unique ID for a new trip plan or activity.
     * @returns {string} A unique identifier.
     */
    generateUniqueId: () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Formats a date to a more readable string.
     * @param {Date} date - The date to format.
     * @returns {string} The formatted date string.
     */
    formatDate: (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    },

    /**
     * Calculates the total budget for a trip plan based on activities.
     * @param {Array} activities - An array of activity objects.
     * @returns {number} The total budget.
     */
    calculateTotalBudget: (activities) => {
        return activities.reduce((total, activity) => total + (activity.cost || 0), 0);
    },

    /**
     * Checks if a given string is a valid email format.
     * @param {string} email - The email string to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    isValidEmail: (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
};