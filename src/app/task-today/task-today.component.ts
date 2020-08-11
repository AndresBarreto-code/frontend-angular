import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../interfaces/data-interface';
import { TaskInterface } from '../interfaces/task-interface';

@Component({
  selector: 'afbg-task-today',
  templateUrl: './task-today.component.html',
  styleUrls: ['./task-today.component.scss']
})
export class TaskTodayComponent implements OnInit {

  tasks : TaskInterface[];

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.data.getNames((data: DataInterface) => this.tasks=this.data.filterByToday(data.Tasks))
  }

}
