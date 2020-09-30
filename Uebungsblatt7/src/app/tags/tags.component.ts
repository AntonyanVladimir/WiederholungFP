import { Component, OnInit } from '@angular/core';
import { LiefertArticlesService } from '../liefert-articles.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
 tags:any;
  constructor(private service:LiefertArticlesService) { }

  ngOnInit(): void {
    this.service.getTagMap().subscribe(tags=>{
      this.tags = tags;
    })
  }

}
