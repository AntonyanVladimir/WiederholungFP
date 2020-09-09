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
	isCompact: boolean;
	constructor(private route: ActivatedRoute, private service: LiefertArticlesService, private router: Router) { }
	currentRoute;
	filterEinsetzen: boolean;
	suchtag: string;
	suchwort: string;
	articles: Artikel[];
	ngOnInit(): void {
		this.currentRoute = this.route.url;
		console.log(this.currentRoute);
		this.route.queryParamMap.subscribe((params) => {
			this.suchwort = params.get("suchWort");
			this.suchtag = params.get("suchtag");
			this.service.getAllArticles(this.suchtag, this.suchwort).subscribe(artikels =>{

				this.articles = artikels;
			})
		})
	}
	navigateCompact() {
		this.router.navigate(
			[],
			{
				relativeTo: this.route,
				queryParams: { view: 'compact' },
				queryParamsHandling: 'merge'
			});
	}
	navigateFull() {
		this.router.navigate(
			[],
			{
				relativeTo: this.route,
				queryParams: { view: 'full' },
				queryParamsHandling: 'merge'
			});
	}
	removeTagfilter() {
		this.router.navigate(
			[],
			{
				relativeTo: this.route,
				queryParams: {
				suchtag: null,
				
				},
				queryParamsHandling: 'merge'
			})
	}
	removeSuchwortFilter(){
		this.router.navigate(
			[],
			{
				relativeTo: this.route,
				queryParams: {
				suchWort: null,
				},
				queryParamsHandling: 'merge'
			})
	}

	deleteArtikel(article:Artikel){
		this.articles = this.articles.filter(a=>a.id!==article.id);

		this.service.deleteArticle(article.id).subscribe();
	}

}
