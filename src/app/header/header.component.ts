import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router){
    this.isLoggedIn = this.authService.getIsAuthenticated();
  }

  logout(){
    this.authService.removeAuthentication();
    window.localStorage.clear();
    this.isLoggedIn = this.authService.getIsAuthenticated();
    this.router.navigateByUrl("login-page"); 
  }

  ngOnInit(): void {

  }
}
