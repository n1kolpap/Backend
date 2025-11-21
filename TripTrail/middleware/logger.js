const logger = (req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] ${method} request to ${url}`);
    
    res.on('finish', () => {
        console.log(`[${timestamp}] Response status: ${res.statusCode}`);
    });
    
    next();
};

export default logger;