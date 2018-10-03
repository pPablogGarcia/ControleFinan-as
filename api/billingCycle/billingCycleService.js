const BillingCycle = require("./billingCyle.js");

BillingCycle.methods(["get", "post", "put", "delete"]);

console.log("service ==> ok");
module.exports = BillingCycle;