(function () {
    angular.module("finance")
        .component("valueBox", {
            bindings: { grid: "@", value: "@", text: "@", colorClass: "@", iconClass: "@" },
            controller: ["gridSystem", Grid],
            templateUrl: "components/valueBox/valueBoxComponent.html"
        });

    function Grid(gridSystem) {
        this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid);
    };
})();