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
}
