angular.module("money", [
    "ui.router", 
    "ngAnimate", 
    "toastr"
]);
angular.module("money").config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
          $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/Dashboard/dashboard.html"
          }).state('billingCycle', {
            url: "/billingCycles?page",
            templateUrl: "views/BillingCycles/billingCycles.html"
          })
      
          $urlRouterProvider.otherwise('/dashboard')
        }
      ]);
