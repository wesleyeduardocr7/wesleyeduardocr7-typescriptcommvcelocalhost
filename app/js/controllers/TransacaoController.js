System.register(["../views/index", "../models/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, TransacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            TransacaoController = class TransacaoController {
                constructor() {
                    this._transacoes = new index_2.Transacoes();
                    this._transacoesView = new index_1.TransacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._transacoesView.update(this._transacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const transacao = new index_2.Transacao(this._inputNome.val(), parseFloat(this._inputNota1.val()), parseFloat(this._inputNota2.val()), parseFloat(this._inputFrequencia.val()), parseFloat(this._inputProvaFinal.val()));
                    this._transacoes.adiciona(transacao);
                    this._transacoesView.update(this._transacoes);
                    this._mensagemView.update('Transação adicionada com sucesso!');
                    this._limpaFormulario();
                }
                _limpaFormulario() {
                    this._inputNome.val('');
                    this._inputNota1.val('');
                    this._inputNota2.val('');
                    this._inputFrequencia.val('');
                    this._inputProvaFinal.val('');
                }
            };
            __decorate([
                index_3.domInject('#nome')
            ], TransacaoController.prototype, "_inputNome", void 0);
            __decorate([
                index_3.domInject('#nota1')
            ], TransacaoController.prototype, "_inputNota1", void 0);
            __decorate([
                index_3.domInject('#nota2')
            ], TransacaoController.prototype, "_inputNota2", void 0);
            __decorate([
                index_3.domInject('#frequencia')
            ], TransacaoController.prototype, "_inputFrequencia", void 0);
            __decorate([
                index_3.domInject('#provaFinal')
            ], TransacaoController.prototype, "_inputProvaFinal", void 0);
            exports_1("TransacaoController", TransacaoController);
        }
    };
});
