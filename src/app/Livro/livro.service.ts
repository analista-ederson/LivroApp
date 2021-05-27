import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro';

const URL = "https://localhost:44325/api/livro";

@Injectable({
    providedIn: 'root'
})

export class LivroService {

    constructor(private http: HttpClient){

    }

    public getBooks(){
        return this.http.get<Livro[]>(`${URL}` + "/listartodos")
    }

    public insertBook(livro){
        return this.http.post<Livro>(`${URL}` + "/cadastrar", livro);
    }

    public getOneBook(id: number){
        return this.http.get<Livro>(`${URL}/obterporid?id=${id}`);
    }

    public deleteBook(id: number){
        return this.http.delete<Livro>(`${URL}/excluir?id=${id}`);
    }
}