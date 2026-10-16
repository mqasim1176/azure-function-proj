async function healthCheckHandler() {
  return {
    status: 200,
    jsonBody: {
      status: "Healthy"
    }
  };
}

module.exports = { healthCheckHandler };