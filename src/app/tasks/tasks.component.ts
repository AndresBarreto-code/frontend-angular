import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../interfaces/data-interface';
import { TaskInterface } from '../interfaces/task-interface';

@Component({
  selector: 'afbg-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  tasks: TaskInterface[]=[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getNames((data: DataInterface) => Object.keys(data.Tasks).map((key) => this.tasks.push(data.Tasks[key])))
  }

}
