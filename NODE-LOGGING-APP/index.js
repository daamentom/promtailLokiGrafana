const winston = require('winston');
const fs = require('fs');
const path = require('path');

const logDir = 'logs';

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir)

}
// Configure Winston Logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: path.join(logDir, 'application.log') })
    ]
});

// Log some sample messages
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

// Simulate periodic logging
setInterval(() => {
    logger.info('Periodic log message');
}, 5000);
