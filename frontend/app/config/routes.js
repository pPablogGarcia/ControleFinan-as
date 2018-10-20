(function () {
    angular.module("finance")
        .config([
            "$stateProvider",
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider.state("dashboard", {
                    url: "/dashboard",
                    templateUrl: "views/Dashboard/dashboard.html"
                });
                $stateProvider.state("billingCycle", {
                    url: "/billingCycle",
                    templateUrl: "views/BillingCycle/billingCycle.html"
                });
                $stateProvider.state("limbo", {
                    url: "/limbo",
                    templateUrl: "views/Limbo/teste.html"
                });

                $urlRouterProvider.otherwise("/dashboard");
            }]);
})();