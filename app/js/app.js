System.register(["./controllers/TransacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TransacaoController_1, controller;
    return {
        setters: [
            function (TransacaoController_1_1) {
                TransacaoController_1 = TransacaoController_1_1;
            }
        ],
        execute: function () {
            controller = new TransacaoController_1.TransacaoController();
            $('.form').submit(controller.adiciona.bind(controller));
        }
    };
});
