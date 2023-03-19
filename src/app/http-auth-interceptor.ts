import { HttpErrorResponse, HttpInterceptor } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {


    //Check if user is already authenticated and has jwt token stored
    if(this.authService.getIsAuthenticated !==null){
      //retrieve the stored token from the auth service
      const authToken = this.authService.getToken();

      //Clone the request and add updated authorization header
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)}
      );

      //Send new cloned request with updated headers to the next handler
      return next.handle(authReq);
    }
    catchError(err => {
      if(err instanceof HttpErrorResponse && err.status === 401){
        this.authService.signOut();
      }

      return throwError(err);
    })
  }
}
