import { Component, OnInit } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';
import { TaskTodayComponent } from '../task-today/task-today.component';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'afbg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
