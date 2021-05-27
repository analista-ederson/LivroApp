import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assunto } from '../Assunto/assunto';
import { Autor } from '../Autor/autor';
import { Livro } from './livro';
import { LivroService } from './livro.service';

@Component({
    selector: "app-livro",
    templateUrl: "./livro.component.html"
})

export class LivroComponent implements OnInit{
    livro: Livro;
    livros: Livro[] = [];
    form: FormGroup;

    constructor(private service: LivroService, private fb:FormBuilder){
        this.livro = new Livro();
        this.livro.Autor = new Autor();
        this.livro.Assunto = new Assunto();
    }

    public createForm(){
        this.form = this.fb.group({
            codlivro:[null],
            titulo:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
            editora:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            edicao:[null, [Validators.required]],
            anoPublicacao:[null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
            codautor:[null],
            autor:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            codassunto:[null],
            nomeAutor:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            descricao:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
        })
    }

    private getValue(field: string){
        return this.form.controls[field].value;
    }

    public setForm(item){
        this.form.patchValue({                    
            idLivro: item.CodLivro,
            titulo: item.Titulo,
            editora: item.Editora,
            edicao: item.Edicao, 
            idAutor: item.CodAutor, 
            autor: item.NomeAutor,
            anoPublicacao: item.AnoPublicacao,
            idAssunto: item.CodAssunto,
            descricao: item.Descricao
        })
    }

    public listar(){
        this.service.getBooks().subscribe(res=>{
            console.log(res)
            this.livros = res;
        })
    }

    public salvar(){
        let id = this.getValue("codlivro");
        let item = {};
        item["TItulo"] = this.getValue("titulo");
        item["Editora"] = this.getValue("editora");
        item["Edicao"] =  this.getValue("edicao");
        item["NomeAutor"] = this.getValue("autor");
        item["AnoPublicacao"] = this.getValue("anoPublicacao");
        item["Descricao"] = this.getValue("descricao");
        if(id == null){    
            this.service.insertBook(item).subscribe(res => {
                console.log(res);
                this.form.reset();
                this.listar();
            })
        }else{
            console.log("Atualizou");
        }
    }

    public editItem(id:number){
        this.service.getOneBook(id).subscribe(res=>{
            this.setForm(res);
        })
    }

    public excluir(id:number){
        this.service.deleteBook(id).subscribe(res=>{
            console.log(res);
            this.listar();
        })
    }
    
    ngOnInit(){
        this.createForm();
        this.listar();
    }
}