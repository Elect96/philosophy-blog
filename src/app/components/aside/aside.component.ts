import { Component, OnInit } from '@angular/core';
import { authors } from '../../shared/data-model';
import { ImageFileService } from '../../shared/services/image-file.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  authors = authors;
  constructor(private imageFileService: ImageFileService) { }

  ngOnInit() {
  }

}
