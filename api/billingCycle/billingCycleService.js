const BillingCycle = require("./billingCyle.js");

BillingCycle.methods(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({new: true, runValidators: true});

BiilingCycle.route('count', function(req, res, next){
    BiilingCycle.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]})
        }
    });
});

module.exports = BillingCycle;
console.log("service ==> ok");