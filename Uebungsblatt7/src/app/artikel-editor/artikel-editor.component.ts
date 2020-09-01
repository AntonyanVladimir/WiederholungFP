import { Artikel } from './../artikel';
import { LiefertArticlesService } from './../liefert-articles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css']
})
export class ArtikelEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: LiefertArticlesService) { }
  article:Artikel;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.article = this.service.getArticleById(id);
  }

}
