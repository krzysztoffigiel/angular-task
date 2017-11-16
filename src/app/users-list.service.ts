import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IUsers } from '../models/users.model';

const usersAPI: string = "/users";

@Injectable()
export class UsersListService {

  constructor(private http: Http) { }

  getUsers(): Observable<any[]> {
    return this.http
      .get(usersAPI)
      .map(resp => resp.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(usersAPI + "/" + id)
      .map(resp => resp.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  updateUsers(id: number, user: IUsers): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);

    return this.http
    .put(`${usersAPI}/${id}`, body, options)
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json()));
  }
}
