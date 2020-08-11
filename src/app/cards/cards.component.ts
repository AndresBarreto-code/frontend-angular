import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DataService } from '../data.service';
import { CardSettingsInterface } from '../interfaces/card-setting-interface';
import { DataInterface } from '../interfaces/data-interface';



@Component({
  selector: 'afbg-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public users: CardSettingsInterface;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getNames((data: DataInterface) => this.users = data.Users)
  }

}
