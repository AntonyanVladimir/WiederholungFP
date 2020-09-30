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
    else if (suchtag)
      url = this.baseUrl + '/' + `articles?suchtag=${suchtag}`;
    else if (suchwort)
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
  public createArticle(article): Observable<Artikel> {
    return this.http.post<Artikel>(this.baseUrl + '/' + 'articles', article, httpOptions);
  }

  public deleteArticle(id): Observable<Artikel> {
    return this.http.delete<Artikel>(this.baseUrl + '/' + 'articles' + '/' + id);
  }
  public getTagMap(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + 'tags');
  }


}
