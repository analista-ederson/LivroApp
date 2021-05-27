export class Assunto{
    CodAssunto: number;
    Descricao: string;

    constructor(codAssunto?: number, descricao?: string){
        this.CodAssunto = codAssunto;
        this.Descricao = descricao;
    }
}