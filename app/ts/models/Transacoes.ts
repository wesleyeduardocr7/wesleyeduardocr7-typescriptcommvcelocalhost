import { Transacao } from './Transacao';

export class Transacoes {

    private _transacao: Transacao[] = [];

    adiciona(transacao: Transacao): void {

        this._transacao.push(transacao);
    }

    paraArray(): Transacao[] {

        return ([] as Transacao[]).concat(this._transacao);
    }
}
