import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'x-auth, content-type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private http: HttpClient) { }
  public add(...params: number[]): number {
    let result = 0;
    for (let val of params) {
      result += val;
    }
    return result;
  }

  // get data
  public showplaces() {
    return this.http.get('http://localhost:4200/assets/mydata.json');
  }

  // get all posts data
  public getAllPostsData() {
    return this.http.get('/api/notes');
  }

  // save post
  public savePost(postData) {
    return this.http.post('/api/notes', postData, httpOptions);
  }
}
