import { LiefertArticlesService } from './../liefert-articles.service';
import { Component, OnInit, Input } from '@angular/core';
import { Artikel } from '../artikel'
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artikel',
	templateUrl: './artikel.component.html',
	styleUrls: ['./artikel.component.css']
})

export class ArtikelComponent implements OnInit {
	@Input() article: Artikel
	showCompact: boolean;

	constructor(private route: ActivatedRoute, private service: LiefertArticlesService) { }

	ngOnInit(): void {
		const artikelId = this.route.snapshot.paramMap.get('id');
		const view = this.route.snapshot.queryParamMap.get('view');
		if (view == "compact")
			this.showCompact = true;
			else 
			this.showCompact = false;
		if (artikelId) {
			this.article = this.service.getArticleById(artikelId);
		}

	}
	displayTauschen(){
		this.showCompact = !this.showCompact;
	}
	
}




