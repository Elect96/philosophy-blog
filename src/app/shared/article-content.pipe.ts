import { Pipe, PipeTransform } from '@angular/core';
import { ImageFileService } from './services/image-file.service';
/*
 * Returns first paragraph of the text
 * Usage: content | articleContent
*/
@Pipe({name: 'articleContent'})
export class ArticleContentPipe implements PipeTransform {
    constructor(private imageFileService: ImageFileService) { }

    transform($content: string[]): string {
        /*
        * Input: strings array | type: any
        * Output: string | type: any
        * Function parses the images into base content array
        */
        const numberOfParagraphs = 3;
        const images = [
            "<img src='" + this.imageFileService.imageFile("artykul1") + "' alt='robot' class='w-100 mb-3'>",
            "<img src='" + this.imageFileService.imageFile("artykul2") + "' alt='politician' class='w-100 mb-3'>"
        ];
        
        let tmp:any = false;
        // Detects if images are already added
        // Returns True if detected
        for (let i = 0; i < $content.length; i++) {
            if ($content[i].includes("<img")) {
                tmp = true;
                break;
            }
        }
        // If images are not detected
        // Adds images into $content using numberOfParagraphs as a interval
        if (tmp == false) {
            tmp = numberOfParagraphs;
            for (let i = 0; i < images.length; i++) {
                $content.splice(tmp, 0, images[i]);
                tmp += numberOfParagraphs + 1;
            }  
        }

        const htmlTag = "<p>";
        // Adds "<p>" at the begining and "</p>" at the end of the $content[0]
        let result: any = htmlTag.concat($content[0], "</p>");
        for (let i = 1; i < $content.length; i++) {
            // Adds "<p>" at the begining and "</p>" at the end to every $content[i] that doesn't contain "<img"
            if ($content[i].includes("<img")) {
                result += $content[i];
            } else {
                result += htmlTag.concat($content[i], "</p>");
            }
        }
        return result;
    }
}