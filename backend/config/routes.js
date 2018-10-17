const express = require("express");

module.exports = routes;

function routes(server) {
    //API Routes
    const router = express.Router();

    server.use("/api", router);

    //API routes
    const billingCyleService = require("../api/billingCycle/billingCycleService.js");
    billingCyleService.register(router, "/billingCycles");

    const billingSummaryService = require("../api/billingSummary/billingSummaryService.js");
    router.route("/billingSummary").get(billingSummaryService.getSummary);
};