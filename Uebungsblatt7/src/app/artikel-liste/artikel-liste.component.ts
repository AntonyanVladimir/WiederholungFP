import { LiefertArticlesService } from './../liefert-articles.service';
import { Component, OnInit } from '@angular/core';
import { Artikel } from '../../app/artikel'
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artikel-liste',
	templateUrl: './artikel-liste.component.html',
	styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

	constructor(private route: ActivatedRoute, private service: LiefertArticlesService) { }
	articles: Artikel[];
	ngOnInit(): void {
		this.route.queryParamMap.subscribe((params)=>{
			let suchwort = params.get("suchWort");
			let suchtag = params.get("suchtag");
			if(suchwort){
				this.articles = this.service.getArticlesBySuchwort(suchwort);
			} else if(suchtag){
				this.articles = this.service.getArticlesByTag(suchtag);
			}
			else 
			this.articles = this.service.getAllArticles();
		})
	}

}
