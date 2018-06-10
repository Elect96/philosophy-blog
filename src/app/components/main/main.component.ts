import { Component } from '@angular/core';
import { ImageFileService } from '../../shared/services/image-file.service';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  constructor(private imageFileService: ImageFileService) {  }

  // imageFile($name) {
  //   return this.imagePath = "../../assets/images/" + $name + ".jpg";
  // }

}
