import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoProfileComponent } from '../photo-profile/photo-profile.component';

@Component({
  selector: 'afbg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  pathUrl: string;
  tasksActive: Boolean = false;
  groupsActive: Boolean = false;
  cardsActive: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.changeTab()
  }

  ngOnInit(): void {
  }

  changeTab() {
    this.pathUrl = this.activatedRoute.snapshot['_routerState'].url;
    console.log(this.pathUrl);
    this.tasksActive = this.pathUrl == '' ? true : this.pathUrl == '/' ? true : false;
    this.groupsActive = this.pathUrl == '/groups' ? true : false;
    this.cardsActive = this.pathUrl == '/cards' ? true : false;
  }

}
