import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  photos: Array<string>;
  title: String;
  description: String;
  constructor() {}

  ngOnInit() {
    this.photos = ['photo.jpg', 'photo2.png'];
    this.title = 'Web developer';
    this.description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sunt!';
  }
}
