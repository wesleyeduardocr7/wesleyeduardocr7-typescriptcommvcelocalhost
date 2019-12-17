System.register(["./Transacao", "./Transacoes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Transacao_1_1) {
                exportStar_1(Transacao_1_1);
            },
            function (Transacoes_1_1) {
                exportStar_1(Transacoes_1_1);
            }
        ],
        execute: function () {
        }
    };
});
