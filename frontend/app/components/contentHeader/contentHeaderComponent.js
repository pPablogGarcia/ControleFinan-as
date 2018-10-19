angular.module("finance")
    .component("contentHeader", {
        bindings: { name: "@", small: "@" },
        templateUrl: "components/contentHeader/contentHeaderComponent.html"
    });