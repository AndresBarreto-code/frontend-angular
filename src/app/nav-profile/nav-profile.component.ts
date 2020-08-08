import { Component, OnInit } from '@angular/core';
import { PhotoProfileComponent } from '../photo-profile/photo-profile.component';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.css']
})
export class NavProfileComponent implements OnInit {

  photo: String;

  constructor() { }

  ngOnInit() {
    this.photo = 'photo.jpg';
  }

}
