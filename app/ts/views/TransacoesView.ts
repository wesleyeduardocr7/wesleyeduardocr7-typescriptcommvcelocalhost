import { View } from './View';
import { Transacoes } from '../models/Transacoes';

export class TransacoesView extends View<Transacoes> {

    template(model: Transacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th>NOME</th>
                <th>NOTA 1</th>
                <th>NOTA 2</th>
                <th>PERCENTUAL</th>
                <th>PROVA FINAL</th>
                <th>MÉDIA FINAL</th>
                <th>SITUAÇÃO</th>
                <th>Nº APROVADOS</th>
                <th>Nº REPROVADOS</th>
                <th>MÉDIA GERAL</th>                   
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(transacao => 
                    `
                        <tr>
                            <td>${transacao.nome}</td>
                            <td>${transacao.nota1}</td>
                            <td>${transacao.nota2}</td>
                            <td>${transacao.frequencia}</td>
                            <td>${transacao.provaFinal}</td> 
                            <td>
                                ${transacao.media}
                            </td>                        
                            <td>
                                 ${transacao.situacao}
                            </td>
                        <tr>
                    `   
                ).join('')}            
            </tbody>

            <tfoot>
            <td colspan="7"></td>

                <td>
                    ${model.paraArray().reduce((total, valor) => total + ( valor.situacao == 'APROVADO' ? 1 : 0 ) , 0 )}
                </td>

                <td>
                    ${model.paraArray().reduce((total, valor) => total + ( valor.situacao == 'REPROVADO' ? 1 : 0 ) , 0 )}
                </td>

                <td>
                    ${
                        model.paraArray().reduce((somaMedias, valor) => (somaMedias) + (valor.media), 0.0) 
                        /model.paraArray().reduce((iterador) => (iterador) + 1 , 0)
                    }
                </td>
            </tfoot>
        </table>
        `;
    }
}