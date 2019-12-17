import { TransacoesView, MensagemView } from '../views/index';
import { Transacao, Transacoes } from '../models/index';
import { domInject } from '../helpers/decorators/index';

export class TransacaoController {

    @domInject('#nome')
    private _inputNome: JQuery;

    @domInject('#nota1')
    private _inputNota1: JQuery;

    @domInject('#nota2')
    private _inputNota2: JQuery;

    @domInject('#frequencia')
    private _inputFrequencia: JQuery;

    @domInject('#provaFinal')
    private _inputProvaFinal: JQuery;
    
    private _transacoes = new Transacoes();
    private _transacoesView = new TransacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    
    constructor() {
        this._transacoesView.update(this._transacoes);
    }

    adiciona(event: Event) {
    
        event.preventDefault();

        const transacao = new Transacao(

            this._inputNome.val(), 
            parseFloat(this._inputNota1.val()),
            parseFloat(this._inputNota2.val()),
            parseFloat(this._inputFrequencia.val()),
            parseFloat(this._inputProvaFinal.val()),            
        );
        
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

    
}
