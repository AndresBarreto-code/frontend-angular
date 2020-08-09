import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DataService } from '../data.service';
import { CardSettings } from '../card/card-setting';

interface Data {
  Users: CardSettings;
  Tasks: string[];
};


@Component({
  selector: 'afbg-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public users: CardSettings;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getNames((data: Data) => this.users = data.Users)
  }

}
