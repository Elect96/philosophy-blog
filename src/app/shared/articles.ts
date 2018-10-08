import { Article, authors, dates, content } from './data-model';

export const articles: Article[] = [
    new Article(authors[1], "Title 1", dates[0], content.article_0),
    new Article(authors[0], "Title 2", dates[1], content.article_1),
    new Article(authors[2], "Title 3", dates[2], content.article_2),
    new Article(authors[2], "Test 4", dates[3], content.article_3),
    new Article(authors[0], "Test 5", dates[4], content.article_4),
    new Article(authors[3], "Test 6", dates[5], content.article_5),
    new Article(authors[4], "Test 7", dates[6], content.article_6),
    new Article(authors[5], "Test 8", dates[7], content.article_7),
    new Article(authors[4], "Test 9", dates[8], content.article_8),
    new Article(authors[0], "Test 10", dates[9], content.article_9),
];