import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

 private isLoggedIn: boolean = this.authService.getIsAuthenticated();
 
 username = localStorage.getItem('username');

 constructor(private authService: AuthService, private userService: UserServiceService){
   
  }
  ngOnInit(){
    let username = localStorage.getItem('username');
 }
}

