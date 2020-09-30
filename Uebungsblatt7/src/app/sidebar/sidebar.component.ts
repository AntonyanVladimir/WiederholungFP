import { LiefertArticlesService } from './../liefert-articles.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: LiefertArticlesService) { }

  tagListe: any;
  suchwort: string;
  maxVorkommendeTagCount: number;
  getGroesse(tagName) {
    let maxVorkommendeTagCount = this.GetMaxVorkommendeTag();
    let absuluteHäufigkeit = this.tagListe.get(tagName);
    var size = Math.floor(absuluteHäufigkeit / (maxVorkommendeTagCount / 5.0));

    return size;
  }
  GetMaxVorkommendeTag() {
    let max = 1;
    for (let [key, value] of this.tagListe) {
      if (parseInt(value) > max)
        max = parseInt(value);
    }
    return max;
  }
  GetAllTagsCount() {
    var tagCount = 0;
    for (let [key, value] of this.tagListe)
      tagCount += parseInt(value);
    return tagCount;

  }
  ngOnInit(): void {
    this.service.getTagMap().subscribe((response: any) => {
      this.tagListe = new Map(Object.entries(response));
    });
  }
}

