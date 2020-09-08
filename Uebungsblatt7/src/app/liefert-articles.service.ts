import { Injectable } from '@angular/core';
import { Artikel } from './artikel';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class LiefertArticlesService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  public getAllArticles(suchtag, suchwort): Observable<Artikel[]> {
    let url;
    if (suchtag && suchwort)
      url = this.baseUrl + '/' + `articles?suchtag=${suchtag}&suchwort=${suchwort}`;
    else if(suchtag)
      url = this.baseUrl + '/' + `articles?suchtag=${suchtag}`;
    else if(suchwort)
      url = this.baseUrl + '/' + `articles?suchwort=${suchwort}`;
      else
       url = this.baseUrl + '/' + 'articles'; 
    return this.http.get<Artikel[]>(url);
  }
  public getArticleById(id): Observable<Artikel> {
    return this.http.get<Artikel>(this.baseUrl + '/' + 'articles' + '/' + id);
  }

  public editArticle(article: Artikel): Observable<Artikel> {
    return this.http.put<Artikel>(this.baseUrl + '/' + 'articles' + '/' + article.id, article, httpOptions);
  }

  public getArticlesByTag(testTag, artikels: Artikel[]): Artikel[] {
    var arts = [];
    for (let article of artikels) {
      for (let tag of article.tags)
        if (tag === testTag)
          arts.push(article);
    }
    return arts;
  }
  public getArticlesBySuchwort(suchwort, artikels: Artikel[]): Artikel[] {
    let arts = [];
    if (suchwort) {
      suchwort = suchwort.toLowerCase();
      for (let article of artikels) {
        for (let [key, value] of Object.entries(article)) {
          if (key === "tags") {
            for (let tag of value) {
              if (tag.toLowerCase() === suchwort && !arts.includes(article))
                arts.push(article);
            }
          }
          if (key === "ueberschrift" || key === "autor" || key === "anriss" || key === "text") {
            value = value.toLowerCase();
            if (value.search(suchwort) !== -1 && !arts.includes(article))
              arts.push(article);
          }
        }
      }
      return arts;
    }
  }
  public getArticlesBySuchtagUndSuchwort(suchtag, suchwort) {
    let bysuchtag = this.getArticlesByTag(suchtag, this.articles);

    return this.getArticlesBySuchwort(suchwort, bysuchtag);
  }
  private articles: Artikel[] = [
    {
      id: 'article1',
      ueberschrift: 'HTML Dokumente',
      autor: 'Vladimir Antonyan',
      datum: new Date('15. February 2015 20:14').toISOString().substring(0, 10),
      anriss: 'Eine kurze Einführung in HTML-Dokumente',
      text: 'HTML Dokumente dienen der Strukturierung von Inhalten, die im Web bzw. mit Webtechnologien wie Internetbrowser und Hypertext Transfer Protocol (HTTP) verbreitet werden sollen. HTML Dokumente bestehen aus HTML-Elementen. Das einfachste HTML5 Dokument ist: <br>'
        + '<pre>'
        + '&lt;!DOCTYPE html&gt;\n'
        + '&lt;html&gt;\n'
        + '  &lt;head&gt;\n'
        + '    &lt;title&gt;Titel des Dokuments&lt;/title&gt;\n'
        + '  &lt;/head&gt;\n'
        + '  &lt;body&gt;\n'
        + '  &lt;/body&gt;\n'
        + '&lt;/html&gt;\n'
        + '</pre>',
      bild: 'https://cdn.pixabay.com/photo/2020/05/02/09/59/pup-5120625_960_720.jpg',
      tags: ['HTML5', 'Dokument', 'HTTP']
    },
    {
      id: 'article2',
      ueberschrift: 'HTML Elemente',
      autor: 'Vladimir Antonyan',
      datum: new Date('15. February 2015 20:14').toISOString().substring(0, 10),
      anriss: 'Eine kurze Einführung in HTML Elemente',
      text: 'Die HTML Elemente eines HTML Dokuments sind ineinander geschachtelt und bilden damit eine hierarchische Struktur, einen Baum. Ein Element besteht üblicherweise aus einem öffnenden und einem schließenden Tag. Zwischen den beiden Tags befindet sich der eigentliche Inhalt des Elements.<br> Weiterhin können im öffnenden Tag Attribute in Form von Schlüssel-Wert Paaren notiert werden.<br><br>Beispiel: <code>&lt;a href="https://w3.org"&gt;Das ist ein Link auf ein anderes HTML-Dokument (W3C)&lt;/a&gt;</code> wird dargestellt als:<br><br><a href="https://w3.org">Das ist ein Link auf ein anderes HTML-Dokument (W3C)</a>',
      bild: 'https://cdn.pixabay.com/photo/2020/04/25/13/15/venice-5090764_960_720.jpg',
      tags: ['HTML5', 'Element']
    },
    {
      id: 'article3',
      ueberschrift: 'Semantische Strukturierung von HTML-Seiten',
      autor: 'Vladimir Antonyan',
      datum: new Date('15. February 2015 20:14').toISOString().substring(0, 10),
      anriss: 'Ein kurzer Überblick über semantische Elemente in HTML5.',
      text: 'In der Vergangenheit wurden HTML-Dokumente häufig mit Tabellen oder Frames (ok, sehr weit zurückliegende Vergangenheit...) strukturiert. Später wurden dafür <code>&lt;div&gt;</code>-Elemente verwendet. In HTML5 gibt es Elemente, die es erlauben, den einzelnen Teilen des Dokuments eine Semantik zu verleihen, die von modernen Browsern ausgewertet wird und ggf. die Darstellung - z. B. auf Mobilgeräten und in Readern - beeinflusst. Beispielsweise lässt sich ein Dokument mit den Elementen <code>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</code> grob in Kopf-, Inhalts- und Fußbereich unterteilen. Weitere semantische Elemente sind <code>&lt;nav&gt;, &lt;aside&gt;, &lt;article&gt;, &lt;section&gt;</code>',
      bild: 'https://cdn.pixabay.com/photo/2020/03/21/16/02/sunset-4954402_960_720.jpg',
      tags: ['Semantik', 'HTML5', 'Element']
    },
  ];



}
