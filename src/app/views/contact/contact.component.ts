import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 57.1453936;
  lng: number = -2.1096468;

  constructor() { }

  ngOnInit() {
  }

}
