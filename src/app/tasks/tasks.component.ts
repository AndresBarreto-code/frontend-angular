import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tareas: string[];
  
  constructor() { }

  ngOnInit() {
    this.tareas = ['Tarea 1 Lorem', 'Tarea 2 Lorem ipsolum', 'Tarea 3 Lorem']
  }

}
