import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../interfaces/data-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'afbg-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.scss']
})
export class ShowGroupComponent implements OnInit {

  tasks : Object[];
  nombreGrupo : string;

  constructor(private data : DataService, private activatedRoute : ActivatedRoute) { 
    this.nombreGrupo = this.activatedRoute.snapshot.params['nombre'];
  }

  ngOnInit(): void {
    this.data.getNames((data: DataInterface) => this.tasks=this.data.filterByGroup(data.Tasks,this.nombreGrupo))
  }

}
