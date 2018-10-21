(function () {

    angular.module("finance")
        .factory("messageToastr", ["toastr", MessageFactory]);

    function MessageFactory(toastr) {

        function CreateMessage(msgs, title, method) {
            if (msgs instanceof Array) {
                msgs.forEach(msg => toastr[method](msg, title));
            } else {
                toastr[method](msgs, title);
            }
        };

        function addSuccess(msgs) {
            CreateMessage(msgs, "Sucesso", "success");
        };
        function addError(msgs) {
            CreateMessage(msgs, "Erro", "error");
        };
        function addInfo(msgs) {
            CreateMessage(msgs, "Informativo", "info");
        };
        function addWarning(msgs) {
            CreateMessage(msgs, "Atenção", "warning");
        };

        return { addSuccess, addError, addInfo, addWarning }
    };

})();