import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface Data {
  Users: string[];
  Tasks: string[];
};

@Injectable()
export class DataService {

  private users: string[];

  constructor(private httpService: HttpService) { }

  getNames(callback) {
    return this.httpService.getInfo().subscribe(
      callback,
      (err) => console.log(err),
      () => { }
    );
  }

  postTask(Task) {
    this.httpService.postInfo('Tasks',Task).subscribe((data: Response) => console.log(data));
  }

  getTodayDate(){
    let hoy = new Date();
    let anio, mes, dia;
    if(hoy.getDate()<10){
      dia = '0'+hoy.getDate()
    }else dia = hoy.getDate();
    if ((hoy.getMonth()+1)<10) {
      mes = '0'+(hoy.getMonth()+1);
    }else mes = (hoy.getMonth()+1);
    anio = hoy.getFullYear();
    return anio+'-'+mes+'-'+dia
  }

  filterByToday(objectToFilter: any[]) {
    let objectFiltered : any[] = [];
    const today = this.getTodayDate()
    Object.keys(objectToFilter).map((key) => {
      if (objectToFilter[key].fecha == today) {
        objectFiltered.push(objectToFilter[key]);
      }
    });
    return objectFiltered;
  }

  filterByGroup(objectToFilter: any[], group : string) {
    let objectFiltered : any[] = [];
    const today = this.getTodayDate()
    Object.keys(objectToFilter).map((key) => {
      if (objectToFilter[key].grupo == group) {
        objectFiltered.push(objectToFilter[key]);
      }
    });
    return objectFiltered;
  }
}
