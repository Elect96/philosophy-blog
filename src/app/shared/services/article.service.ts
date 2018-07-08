import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { articles } from '../articles';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) { }

    getArticle(id: number | string) {
        return articles[id];
    }

    getArticles() {
        return articles;
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

}
