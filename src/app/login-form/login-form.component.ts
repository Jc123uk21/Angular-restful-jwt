import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl ,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
   
  isLoggedIn: boolean;

  loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,){
    this.isLoggedIn = this.authService.getIsAuthenticated();
  }
  
  onSubmit():void{
    this.authService.login(this.loginForm.get('username')?.getRawValue(), 
    this.loginForm.get('password')?.getRawValue())
    .subscribe({
      next: data =>{
        this.authService.setAuthenticated(data);
        localStorage.setItem('username', this.loginForm.get('username')?.getRawValue());
        this.isLoggedIn = this.authService.getIsAuthenticated();
        console.log(localStorage.getItem('token'));
        this.router.navigateByUrl("userHome");
      }
    }
    )
  }
  
}


