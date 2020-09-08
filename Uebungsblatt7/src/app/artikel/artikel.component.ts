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
	@Input() showCompact: boolean;

	constructor(private route: ActivatedRoute, private service: LiefertArticlesService) { }

	ngOnInit(): void {
		this.route.queryParamMap.subscribe(queryParams => {
			const view = queryParams.get('view');
			if (view === 'alleCompact' || view ==='compact')
			this.showCompact = true;
			else 
				this.showCompact = false; 
		})
		const artikelId = this.route.snapshot.paramMap.get('id');
		
		if (artikelId) 
			this.service.getArticleById(artikelId).subscribe(artikel=>{
				this.article = artikel;
			}, error=>{
				alert(error);
			})
	}
	displayTauschen() {
		this.showCompact = !this.showCompact;
	}

}




