import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { __values } from 'tslib';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl: string = "http://localhost:8080/user";

  constructor(private http:HttpClient){}

  getUsers(){
    return this.http.get<User[]>(this.userUrl + "/all");
  }

  getUser():Observable<User>{
     var username = this.getUsername();
     return this.http.get<User>(this.userUrl + "/" + username);
  }

  getUsername(){
    return localStorage.getItem('username');
  }
 
} 


