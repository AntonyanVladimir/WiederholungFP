import { Component, OnInit } from '@angular/core';
import { LiefertArticlesService } from '../liefert-articles.service';
import { Artikel } from '../artikel';

@Component({
  selector: 'app-neuen-artikel-erstellen',
  templateUrl: './neuen-artikel-erstellen.component.html',
  styleUrls: ['./neuen-artikel-erstellen.component.css']
})
export class NeuenArtikelErstellenComponent implements OnInit {
  article: Artikel = {
    id: '',
    ueberschrift: '',
    autor: '',
    datum: '',
    anriss: '',
    text:'',
    bild: '',
    tags: []
  };
  constructor(private service: LiefertArticlesService) { }

  ngOnInit(): void {
  }
  dosubmit(article) {
    this.service.createArticle(article).subscribe(article=>{
      this.article = article;
    });
    location.href = '/';
  }
  cancel(){
    location.href = '/';
  }
}
