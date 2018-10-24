const express = require("express");
const auth = require("./auth.js");

module.exports = routes;

function routes(server) {

    //Rotas abertas
    const openApi = express.Router();
    server.use("/api", openApi);

    const AuthService = require("../api/User/authService.js");

    openApi.post("/login", AuthService.login);
    openApi.post("/signup", AuthService.signup);
    openApi.post("/validateToken", AuthService.validateToken);

    //Rotas protegidas
    const protectedApi = express.Router();
    server.use("/api", protectedApi);

    protectedApi.use(auth);

    //API routes
    const billingCyleService = require("../api/billingCycle/billingCycleService.js");
    billingCyleService.register(protectedApi, "/billingCycles");

    const billingSummaryService = require("../api/billingSummary/billingSummaryService.js");
    protectedApi.route("/billingSummary").get(billingSummaryService.getSummary);
};