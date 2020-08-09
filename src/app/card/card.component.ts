import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afbg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  photos: Array<string>;
  title: String;
  description: String;
  
  constructor() { }

  ngOnInit(): void {
    this.photos = ['photo.jpg', 'photo2.png'];
    this.title = 'Web developer';
    this.description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sunt!';
  }

}
