const { app } = require('@azure/functions');
const { healthCheckHandler } = require("./healthCheckHandler");
app.http('HealthCheck', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: healthCheckHandler
});
