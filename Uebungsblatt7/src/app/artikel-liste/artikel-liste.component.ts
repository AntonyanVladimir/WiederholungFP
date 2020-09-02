import { LiefertArticlesService } from './../liefert-articles.service';
import { Component, OnInit } from '@angular/core';
import { Artikel } from '../../app/artikel'
import { ActivatedRoute, Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
	selector: 'app-artikel-liste',
	templateUrl: './artikel-liste.component.html',
	styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {
	isCompact:boolean;
	constructor(private route: ActivatedRoute, private service: LiefertArticlesService, private router: Router) { }
	currentRoute;
	articles: Artikel[];
	ngOnInit(): void {
		this.currentRoute = this.route.url;
		console.log(this.currentRoute);
		this.route.queryParamMap.subscribe((params)=>{
			let suchwort = params.get("suchWort");
			let suchtag = params.get("suchtag");
			let view = params.get('view');
			if(view==='compact')
				this.isCompact = true;
			else if(view == 'full')
				this.isCompact = false;

				if(suchwort){
				this.articles = this.service.getArticlesBySuchwort(suchwort);
			} else if(suchtag){
				this.articles = this.service.getArticlesByTag(suchtag);
			}
			else 
			this.articles = this.service.getAllArticles();
		})
	}
	navigateCompact(){
		this.router.navigate(
			[], 
			{
			  relativeTo: this.route,
			  queryParams: { view: 'compact' },
			  queryParamsHandling: 'merge'
			});
	}
	navigateFull(){
		this.router.navigate(
			[], 
			{
			  relativeTo: this.route,
			  queryParams: { view: 'full' },
			  queryParamsHandling: 'merge'
			});
	}

}
