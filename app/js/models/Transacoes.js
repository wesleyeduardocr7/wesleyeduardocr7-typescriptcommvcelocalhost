System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transacoes;
    return {
        setters: [],
        execute: function () {
            Transacoes = class Transacoes {
                constructor() {
                    this._transacao = [];
                }
                adiciona(transacao) {
                    this._transacao.push(transacao);
                }
                paraArray() {
                    return [].concat(this._transacao);
                }
            };
            exports_1("Transacoes", Transacoes);
        }
    };
});
