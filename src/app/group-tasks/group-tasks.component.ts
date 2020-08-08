import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-tasks',
  templateUrl: './group-tasks.component.html',
  styleUrls: ['./group-tasks.component.css']
})
export class GroupTasksComponent implements OnInit {
  
  groups: Object[];

  constructor() { }

  ngOnInit() {
    this.groups = [
      {
        nombre: 'Trabajo',
        icono: 'business_center',
        resaltado: false
      },
      {
        nombre: 'Amigos',
        icono: 'people',
        resaltado: false
      },
      {
        nombre: 'Universidad',
        icono: 'school',
        resaltado: false
      },
      {
        nombre: 'Universidad',
        icono: 'school',
        resaltado: false
      },
      {
        nombre: 'Universidad',
        icono: 'school',
        resaltado: false
      }
    ];
  }

  onHoverGroupIn(item){
    item.resaltado = true;
  }

  onHoverGroupOut(item){
    item.resaltado = false;
  }

}
