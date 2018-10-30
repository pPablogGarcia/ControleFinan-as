(function (){

    angular.module("finance")
    .component("authField", {

        bindings: {
            id: "@",
            label: "@",
            type: "@",
            grip: "@",
            icon: "@",
            model: '=',
            placeholder: "@",
            hide: "<"
        },
        controller: function() {
            this.$onInit = () => {
                this.iconClasses = `glyphicon glyphicon-${this.icon} form-control-feedback`
            }
        },
        templateUrl: "components/authField/authFieldComponent.html"
    });

})();