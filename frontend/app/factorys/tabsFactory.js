(function () {

    angular.module("finance")
        .factory("tabs", [TabFactory]);

    function TabFactory(){

        function Show(owner,{ tabList = false, tabCreate = false, tabUpdate = false, tabDelete = false}){
            owner.tabList = tabList;
            owner.tabCreate = tabCreate;
            owner.tabUpdate = tabUpdate;
            owner.tabDelete = tabDelete;
        }

        return { Show };
    }

})();