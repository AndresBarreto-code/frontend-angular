import { Component, OnInit, Input } from '@angular/core';
import { CardSettings } from './card-setting';

@Component({
  selector: 'afbg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() settings: CardSettings;
  
  constructor() { }

  ngOnInit(): void {
  }

}
