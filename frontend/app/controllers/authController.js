(function () {

    angular.module("finance")
        .controller("AuthController", ["$location", "messageToastr", AuthController])

    function AuthController(){
        const vm = this;

        vm.loginMode = true;

        vm.changeMode = () => vm.loginMode = !vm.loginMode;

        vm.login = () => console.log(`Login...${vm.user.email}`);
        vm.signup = () => console.log(`Signup...${vm.user.email}`);

        vm.getUser = () => ({name: "Pablo Garcia", email: "pablogarcia440@gmail.com"});
        vm.logout = () => { console.log("logout...."); }

    }

})();