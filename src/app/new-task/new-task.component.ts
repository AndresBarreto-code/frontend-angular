import { Component, OnInit } from '@angular/core';
import { DataInterface } from '../interfaces/data-interface';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'afbg-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  
  groups: Object[];

  constructor(private data: DataService, private router : Router) { }

  ngOnInit(): void {
    this.data.getNames((data: DataInterface) => this.groups = data.Groups);
  }

  addTask(values) {
    if (values.valid) {
      this.data.postTask({titulo: values.value.titulo, descripcion: values.value.descripcion, fecha: values.value.fecha, grupo: values.value.grupo.nombre})
      this.router.navigate(['home']);
    }
  }

}
