import { Component, OnInit } from '@angular/core';
import { TareasDataService } from '../tareas-data.service';

@Component({
  selector: 'afbg-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  tareas: Object[];

  constructor(private data: TareasDataService) { }

  ngOnInit(): void {
    this.tareas = this.data.tareas;
  }

}
