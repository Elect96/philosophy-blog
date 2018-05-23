import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: `./main.component.html`,
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  imagePath: string;

  constructor() {  }

  imageFile($name) {
    return this.imagePath = "../../assets/images/" + $name + ".jpg";
  }

}
