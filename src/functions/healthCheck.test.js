const { test } = require("node:test");
const assert = require("node:assert/strict");
const { healthCheckHandler } = require("./healthCheckHandler");

test("HealthCheck returns HTTP 200 and Healthy status", async () => {
  const response = await healthCheckHandler();

  assert.equal(response.status, 200);
  assert.deepEqual(response.jsonBody, {
    status: "Healthy"
  });
});