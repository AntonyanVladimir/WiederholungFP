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

	constructor(private route: ActivatedRoute, private service: LiefertArticlesService) { }

	ngOnInit(): void {
		const artikelId = this.route.snapshot.paramMap.get('id');
		if (artikelId)
			this.article = this.service.getArticleById(artikelId);
	}

}




