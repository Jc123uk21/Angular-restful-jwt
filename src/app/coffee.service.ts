import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Coffee } from './coffee';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private coffeeUrl: string = "http://localhost:8080/coffee/";

  constructor(private http: HttpClient){}

  public getCoffees(): Observable<Coffee[]>{
    return this.http.get<Coffee[]>(this.coffeeUrl + "all");
  }

  public getCoffee(name: string): Observable<Coffee>{
    return this.http.get<Coffee>(this.coffeeUrl + name);
  }
  public saveCoffee(coffee: Coffee){
    return this.http.post<Coffee>(this.coffeeUrl + "add", coffee);
  }

  public deleteCoffeeById(id: any): Observable<any>{

    return this.http.post(this.coffeeUrl + "delete/" + id, id);
  }

  public deleteCoffeeByName(name: string): Observable<any>{
    return this.http.post<string>(this.coffeeUrl + "/delete" + "/" + name, name);
  }
}
