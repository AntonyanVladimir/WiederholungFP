import { LiefertArticlesService } from './../liefert-articles.service';
import { Component, OnInit } from '@angular/core';
import { Artikel } from '../../app/artikel'

@Component({
	selector: 'app-artikel-liste',
	templateUrl: './artikel-liste.component.html',
	styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

	constructor(private service: LiefertArticlesService) { }
	articles: Artikel[];
	ngOnInit(): void {
		this.articles = this.service.getAllArticles();
	}

}
