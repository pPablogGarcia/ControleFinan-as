const express = require("express");
console.log("routes ==> ok");

module.exports = routes;

function routes(server) {
    //API Routes
    const router = express.Router();

    server.use("/api", router);

    //API routes
    const billingCyleService = require("../api/billingCycle/billingCycleService.js");
    billingCyleService.register(router, "/billingCycles");
};