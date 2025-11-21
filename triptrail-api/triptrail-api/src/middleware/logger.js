import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

// Middleware for logging requests and responses
const logMiddleware = (req, res, next) => {
  logger.info({
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    query: req.query,
    params: req.params,
    timestamp: new Date().toISOString()
  });

  res.on('finish', () => {
    logger.info({
      statusCode: res.statusCode,
      statusMessage: res.statusMessage,
      responseTime: `${Date.now() - req.startTime}ms`
    });
  });

  next();
};

export default logMiddleware;