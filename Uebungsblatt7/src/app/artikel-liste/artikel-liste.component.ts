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
			if (this.suchwort || this.suchtag) {
				this.filterEinsetzen = true;
				this.articles = this.service.getArticlesBySuchtagUndSuchwort(this.suchtag, this.suchwort);
			} else
				this.filterEinsetzen = false;
			let view = params.get('view');
			if (view === 'compact')
				this.isCompact = true;
			else if (view == 'full')
				this.isCompact = false;

			if (this.suchwort) {
				this.articles = this.service.getArticlesBySuchwort(this.suchwort, this.service.getAllArticles());
			} else if (this.suchtag) {
				this.articles = this.service.getArticlesByTag(this.suchtag, this.service.getAllArticles());
			}
			else
				this.articles = this.service.getAllArticles();
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

}
