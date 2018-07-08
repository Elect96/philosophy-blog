import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ImageFileService {
    imagePath: string;

    imageFile($name) {
        return this.imagePath = "../../assets/images/" + $name + ".jpg";
    }
}