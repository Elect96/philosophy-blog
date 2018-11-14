import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ImageFileService {
    imagePath: string;

    imageFile($name) {
        let result = this.replaceAll($name);
        return this.imagePath = "../../assets/images/" + result.toLowerCase();
    }

    replaceAll($target) {
        return $target.replace(new RegExp(" ", "g"), "-");
    }
}