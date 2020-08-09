import { Component, OnInit } from '@angular/core';
import { TareasDataService } from '../tareas-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'afbg-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.scss']
})
export class ShowGroupComponent implements OnInit {

  tareas : Object[];
  nombreGrupo : string;

  constructor(private data : TareasDataService, private activatedRoute : ActivatedRoute) { 
    this.nombreGrupo = this.activatedRoute.snapshot.params['nombre'];
  }

  ngOnInit(): void {
    this.tareas = this.data.getTareasGrupo(this.nombreGrupo);
  }

}
