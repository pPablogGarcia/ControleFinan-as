(function(){

    angular.module("finance")
    .constant("consts", {
        appName: "MEAN - Primeira Aplicação",
        version: "1.0",
        owner: "Pablo Garcia",
        year: "2018",
        site: "---",
        apiUrl: "http://localhost:3000/api",
        oapiUrl: "http://localhost:3000/oapi",
        userKey: "_primeira_app_user"
    }).run(["$rootScope", "consts", function($rootScope, consts){
        $rootScope.consts = consts;
    }]);

})();