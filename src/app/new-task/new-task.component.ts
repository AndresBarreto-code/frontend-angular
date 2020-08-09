import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'afbg-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.data.postTask({titulo: 'Titulo 1', descripcion: 'Descripcion 1', fecha: '20-05-07'})
  }

}
