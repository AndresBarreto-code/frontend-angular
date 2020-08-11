import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../interfaces/data-interface';

@Component({
  selector: 'afbg-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groups: Object[];

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.data.getNames((data: DataInterface) => this.groups = data.Groups);
  }
  onHoverGroupIn(item){
    item.resaltado = true;
  }

  onHoverGroupOut(item){
    item.resaltado = false;
  }
}
