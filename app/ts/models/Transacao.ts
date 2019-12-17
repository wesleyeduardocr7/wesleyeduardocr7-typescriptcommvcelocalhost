export class Transacao {
    
    constructor    
    (        
        readonly nome: string,
        readonly nota1: number,
        readonly nota2: number,
        readonly frequencia: number,
        readonly provaFinal: number        
    ) {}

    get media() {

        return (this.nota1 + this.nota2)/2;
    }

    get situacao(){

        if(this.frequencia<75){

            return 'REPROVADO';            

        }else if(this.media > 7){

            return 'APROVADO';
            
        }else if(this.media >= 3 || this.media < 7) {

            let mediaFinal = (  Number(this.media) + Number(this.provaFinal)  ) / 2;
            
            if(mediaFinal < 5 ){
                return 'REPROVADO';
            }else{
                return 'APROVADO';
            }            
        }else{
            return 'REPROVADO'; 
        }
   }
}