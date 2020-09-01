import { LiefertArticlesService } from './../liefert-articles.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  suchwort: string;
  constructor(private route: ActivatedRoute, private service: LiefertArticlesService) { }

  ngOnInit(): void {
  }

}
