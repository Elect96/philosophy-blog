import { Article, authors, dates, content } from './data-model';

export const articles: Article[] = [
    new Article(authors[1], "Title", dates[0], content.article_0),
    new Article(authors[0], "Title", dates[1], content.article_1),
    new Article(authors[2], "Title", dates[2], content.article_2),
];