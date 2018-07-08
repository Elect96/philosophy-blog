import { Pipe, PipeTransform } from '@angular/core';
/*
 * Gets first paragraph of the text
 * Usage:
 *   content | articleContentExcerpt
*/
@Pipe({name: 'articleContentExcerpt'})
export class ArticleContentExcerptPipe implements PipeTransform {
  transform(content: string): string {
    let tmp = content[0];
    for (let i = 1; i <= content.length - 1; i++) {
      tmp += content[i]
    }
    return tmp.slice(0, 295) + "...";
  }
}