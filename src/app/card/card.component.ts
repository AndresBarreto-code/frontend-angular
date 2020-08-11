import { Component, OnInit, Input } from '@angular/core';
import { CardSettingsInterface } from '../interfaces/card-setting-interface';

@Component({
  selector: 'afbg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() settings: CardSettingsInterface;
  
  constructor() { }

  ngOnInit(): void {
  }

}
