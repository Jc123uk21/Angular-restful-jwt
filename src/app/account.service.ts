import { NonNullAssert } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService{
 
  username: string = "";
  is_LoggedIn: boolean= false;
  roles: Array<string> = [];
  currentToken: string = "";

  constructor() { }

  setLoggedInStatus(status: boolean){
    this.is_LoggedIn = status;
  }

  getLoggedInStatus(){
    return this.getLoggedInStatus;
  }

  
  settoken(){
    this.currentToken = localStorage.getItem('token')!;
  }

  getCurrentTokken(){
    return this.currentToken;
  }

  setCurrentUsername(){
    this.username = localStorage.getItem('username')!;
  }

  getCurrentUsername(){
    return this.username;
  }

}
