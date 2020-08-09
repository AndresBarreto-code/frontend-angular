import { Component, OnInit } from '@angular/core';
import { TareasDataService } from '../tareas-data.service';

@Component({
  selector: 'afbg-task-today',
  templateUrl: './task-today.component.html',
  styleUrls: ['./task-today.component.scss']
})
export class TaskTodayComponent implements OnInit {

  tasks : Object[];

  constructor(private data : TareasDataService) { }

  ngOnInit(): void {
    this.tasks = this.data.getTareasHoy();
  }

}
