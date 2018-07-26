import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { articles } from '../articles';
import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) { }

    getArticles() { return of(articles); }
    
    getArticle(id: number | string) {
        return this.getArticles().pipe(
            // (+) before `id` turns the string into a number
            map(articles => articles.find(article => article.id === +id))
        );
    }

    getNewArticles() {
        const length = articles.length;
        const newArticles = [
            articles[length - 1],
            articles[length - 2],
            articles[length - 3]
        ];
        return newArticles;
    }

    getArticlesAuthor($author: string) {
        return this.getArticles().pipe(
            map(articles => articles.filter(article => article.author == $author))
        );
    }

}
