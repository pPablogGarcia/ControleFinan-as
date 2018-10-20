(function () {
    angular.module("finance")
        .controller("DashboardController", ["$http", DashboardController]);

    function DashboardController($http) {
        const vm = this;

        vm.version = "version 1.0";
        vm.header = "Dashboard";


        GetSummary();
        function GetSummary() {
            $http
                .get("http://localhost:3003/api/billingSummary")
                .then(Response)
                .catch(ErrorResp);
        };

        function Response(response) {
            console.log(response);
            if (!response.data == null || !response.data == undefined) {
                vm.credit = response.data.credit;
                vm.debt = response.data.debt;
                vm.total = vm.credit - vm.debt;
            }
        };

        function ErrorResp(error) {
            console.error(error);
            vm.credit = vm.debt = vm.total = 0;
        }
    }
})();