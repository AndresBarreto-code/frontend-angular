import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-today',
  templateUrl: './task-today.component.html',
  styleUrls: ['./task-today.component.css']
})
export class TaskTodayComponent implements OnInit {
  tasks : string[];
  constructor() { }

  ngOnInit() {
    this.tasks = ['Firmar autorización','Otra tarea'];
  }

}
