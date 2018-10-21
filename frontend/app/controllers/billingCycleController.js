(function () {

    angular.module("finance")
        .controller("BillingCycleController", ["$http", "$location", "messageToastr", "tabs", BillingCycleController]);

    function BillingCycleController($http, $location, messageToastr, tabs) {
        const vm = this;
        const url = "http://localhost:3003/api/billingCycles";

        vm.name = "Ciclo de Pagamento";
        vm.title = "Cadastro";

        vm.refresh = Refresh;
        vm.create = Create;
        vm.remove = Remove;
        vm.update = Update;

        vm.creditCreate = CreditCreate;
        vm.creditClone = CreditClone;
        vm.creditDelete = CreditDelete;

        vm.debtCreate = DebtCreate;
        vm.debtClone = DebtClone;
        vm.debtDelete = DebtDelete;

        vm.showTabUpdate = ShowTabUpdate;
        vm.showTabDelete = ShowTabDelete;

        vm.calculateValues = CalculateValues;

        vm.refresh();
        function Refresh() {
            const page = parseInt($location.search().page) || 1;

            $http.get(`${url}?skip=${(page - 1) * 10}&limit=6`)
                .then(response => {
                    vm.billingCycle = { credits: [{}], debts: [{}] };
                    vm.billingCycles = response.data;

                    vm.calculateValues();

                    $http.get(`${url}/count`)
                        .then(response => {
                            vm.pages = Math.ceil(response.data.value / 10);
                            tabs.Show(vm, { tabList: true, tabCreate: true });
                        })
                        .catch(response => {
                            messageToastr.addError(response.data.errors);
                        });
                })
                .catch(response => {
                    messageToastr.addError(response.data.errors);
                });
        };

        function Create() {
            $http.post(url, vm.billingCycle)
                .then(response => {
                    vm.billingCycle = {};
                    messageToastr.addSuccess("Operação concluída com sucesso!");
                })
                .catch(response => {
                    messageToastr.addError(response.data.errors);
                });
        };

        function Update() {
            const updateUrl = `${url}/${vm.billingCycle._id}`;
            $http.put(updateUrl, vm.billingCycle)
                .then(response => {
                    vm.refresh();
                    messageToastr.addSuccess("Operação concluída com sucesso!");
                })
                .catch(response => {
                    messageToastr.addError(response.data.errors);
                });
        }

        function Remove() {
            const deleteUrl = `${url}/${vm.billingCycle._id}`;
            $http.delete(deleteUrl, vm.billingCycle)
                .then(response => {
                    vm.refresh();
                    messageToastr.addSuccess("Operação concluída com sucesso!")
                })
                .catch(response => {
                    messageToastr.addError(response.data.errors);
                });
        };

        function CreditCreate(index) {
            vm.billingCycle.credits.splice(index + 1, 0, {});
        };

        function CreditClone(index, { name, value }) {
            vm.billingCycle.credits.splice(index + 1, 0, { name, value });
            vm.calculateValues();
        };

        function CreditDelete(index) {
            if (vm.billingCycle.credits.length > 1) {
                vm.billingCycle.credits.splice(index, 1);
                vm.calculateValues();
            }
        };

        function DebtCreate(index) {
            vm.billingCycle.debts.splice(index + 1, 0, {});
        };

        function DebtClone(index, { name, value }) {
            vm.billingCycle.debts.splice(index + 1, 0, { name, value });
            vm.calculateValues();
        };

        function DebtDelete(index) {
            if (vm.billingCycle.debts.length > 1) {
                vm.billingCycle.debts.splice(index, 1);
                vm.calculateValues();
            }
        };

        function ShowTabUpdate(billingCycle) {
            vm.billingCycle = billingCycle;
            vm.calculateValues();
            tabs.Show(vm, { tabUpdate: true });
        };

        function ShowTabDelete(billingCycle) {
            vm.billingCycle = billingCycle;
            vm.calculateValues();
            tabs.Show(vm, { tabDelete: true });
        };

        function CalculateValues() {
            vm.credit = 0;
            vm.debt = 0;

            if (vm.billingCycle) {
                vm.billingCycle.credits.forEach(function ({ value }) {
                    vm.credit += !value || isNaN(value) ? 0 : parseFloat(value);
                });

                vm.billingCycle.debts.forEach(function ({ value }) {
                    vm.debt += !value || isNaN(value) ? 0 : parseFloat(value);
                });

                vm.total = vm.credit - vm.debt;
            }
        }
    };

})();