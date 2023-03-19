import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export class AuthGuard implements CanActivate {
        constructor(
          public authService: AuthService,
          public router: Router
        ) { }
        canActivate(
          next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
          if(this.authService.getIsAuthenticated() !==true){
            window.alert("Access not allowed!");
            this.router.navigate(['log-in'])
          }
          return true;
        }
}
