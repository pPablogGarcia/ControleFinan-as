(function(){

   angular.module("finance")
   .component("field",{
       bindings:{ id: "@", label: "@", grid: "@", placeholder: "@", type: "@", model: "=", readonly: "<" },
       controller:["gridSystem", Grid],
       templateUrl: "components/field/fieldComponent.html"
   }); 

   function Grid(gridSystem) {
    this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid);
};
})();