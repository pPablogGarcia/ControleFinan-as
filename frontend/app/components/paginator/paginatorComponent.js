(function () {

    angular.module("finance")
        .component("paginationDocs", {
            bindings: {
                url: "@",
                pages: "@"
            },
            controller: ["$location", Paginator],
            templateUrl: "components/paginator/paginatorComponent.html"
        });

    function Paginator($location) {
        this.$onChanges = () => {
            const pages = parseInt(this.pages) || 1;
            this.pagesArray = Array(pages).fill(0).map((e, i) => i + 1);

            this.current = parseInt($location.search().page) || 1;
            this.needPagination = this.pages > 1;
            this.hasPrev = this.current > 1;
            this.hasNext = this.current < this.pages;
        };
        
        this.isCurrent = i => {
            return this.current == i;
        };
    };


})();