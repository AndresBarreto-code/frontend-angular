import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {
  
  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('https://schedule-angular.firebaseio.com/.json');
  }

  postInfo(endLine: string, data: Object) {
    return this.http.post(`https://schedule-angular.firebaseio.com/${endLine}/.json`,JSON.stringify(data));
  }
}
