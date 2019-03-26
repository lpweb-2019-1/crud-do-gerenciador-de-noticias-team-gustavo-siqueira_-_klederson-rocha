import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias = []
  titulo =  null;
  descricao = null;
  data = null;
  categoria = null;
  tags = [];
  editoria = null;
  noticia_publicada = null;

  
  mostrar(noticia) {
    noticia.visivel = true;
  }
  fechar(noticia) {
    noticia.visivel = false;
  }
  salvar() {
    const noticia = {
      id: this.noticias.length, titulo: this.titulo, 
      visivel: false, descricao: this.descricao, data: this.data, categoria: this.categoria, tags: this.tags,
      editoria: this.editoria, noticia_publicada: this.noticia_publicada,
    };
    this.noticias.push(noticia);
    this.titulo = null;
    this.descricao = null;
    this.data = null;
    this.categoria = null;
    this.tags = null;
    this.editoria = null;
    this.noticia_publicada;
  }
  excluir(noticia) {
    this.noticias.splice(this.noticias.findIndex(n => n.id === noticia.id), 1);

  }
  constructor() { }

  ngOnInit() {
  }

}
