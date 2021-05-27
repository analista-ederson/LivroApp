import { Assunto } from '../Assunto/assunto';
import { Autor } from '../Autor/autor';

export class Livro{
    CodLivro: number;
    Titulo: string;
    Editora: string;
    Edicao: number;
    AnoPublicacao: string;
    Autor: Autor;
    Assunto: Assunto;

    constructor(codLivro?: number, titulo?: string, edicao?: number, editora?: string, anoPublicacao?: string, autor?:Autor, assunto?:Assunto){
        this.CodLivro = codLivro;
        this.Titulo = titulo;
        this.Edicao = edicao;
        this.Editora = editora;
        this.AnoPublicacao = anoPublicacao;
        this.Autor = autor;
        this.Assunto = assunto;
    }
}