(function () {
    angular.module("finance")
        .controller("DashboardController", ["$http", DashboardController]);

    function DashboardController($http) {
        const vm = this;

        vm.version = "version 1.0";
        vm.header = "Dashboard";


        GetSummary();
        function GetSummary() {
            const url = "http://localhost:3003/api/billingSummary";
            $http
                .get(url)
                .then(Response)
                .catch(ErrorResp);
        };

        function Response(response) {

            const { credit = 0, debt = 0 } = response.data;

            vm.credit = credit;
            vm.debt = debt;
            vm.total = credit - debt;
        };

        function ErrorResp(response) {       
            vm.credit = vm.debt = vm.total = 0
        };
    };
})();