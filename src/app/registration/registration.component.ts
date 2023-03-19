import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private authService: AuthService, private userService: UserServiceService,
    private router: Router){}

 

  isLoggedIn: boolean = false;
  submitted = false;

  onSubmit():void{
  }
}
