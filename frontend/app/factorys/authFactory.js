(function(){
    angular.module("finance")
    .factory("auth", [
        "$http",
        "consts",
        AuthFactory
    ]);

    function AuthFactory($http, consts){
        
        function signup(user, callback){
            submit("signup", user, callback);
        };
        function login(user, callback){
            submit("login", user, callback);
        };

        function submit(url, user, callback){
            $http.post(`${consts.oapiUrl}/${url}`, user)
            .then( resp => {
                localStorage.setItem(consts.userKey, JSON.stringify(resp.data));
                $http.defaults.headers.common.Authorization = resp.data.token;

                if(callback) callback(null, resp.data);
            }).catch( err => {
                if(callback) callback(resp.data.errors, resp.data);
            })
        };
        
        return { signup, login }
    };
})();