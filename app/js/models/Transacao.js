System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transacao;
    return {
        setters: [],
        execute: function () {
            Transacao = class Transacao {
                constructor(nome, nota1, nota2, frequencia, provaFinal) {
                    this.nome = nome;
                    this.nota1 = nota1;
                    this.nota2 = nota2;
                    this.frequencia = frequencia;
                    this.provaFinal = provaFinal;
                }
                get media() {
                    return (this.nota1 + this.nota2) / 2;
                }
                get situacao() {
                    if (this.frequencia < 75) {
                        return 'REPROVADO';
                    }
                    else if (this.media > 7) {
                        return 'APROVADO';
                    }
                    else if (this.media >= 3 || this.media < 7) {
                        let mediaFinal = (Number(this.media) + Number(this.provaFinal)) / 2;
                        if (mediaFinal < 5) {
                            return 'REPROVADO';
                        }
                        else {
                            return 'APROVADO';
                        }
                    }
                    else {
                        return 'REPROVADO';
                    }
                }
            };
            exports_1("Transacao", Transacao);
        }
    };
});
