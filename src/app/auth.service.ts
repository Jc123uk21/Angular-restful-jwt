import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, observable, Observable } from 'rxjs';
import { tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl: string = "http://localhost:8080/auth";

  private isAuthenticated: boolean = false;

  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient, private router: Router){
  }


  login(username:string, password:string): Observable<any>{
    return this.http.post<any>(this.authUrl + "/login", {username,password}, this.options);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getIsAuthenticated(): boolean{
    let token = localStorage.getItem('token');
    return token !==null ? true:false;
  }

  setAuthenticated(token: string){
    localStorage.setItem('token', token);
    this.isAuthenticated = localStorage.getItem(token) !== null;
  }

  removeAuthentication(){
     window.localStorage.clear();
  }

  register(user: User): Observable<any>{
    return this.http.post<User>(this.authUrl + "/register", user, this.options);
  }

}
