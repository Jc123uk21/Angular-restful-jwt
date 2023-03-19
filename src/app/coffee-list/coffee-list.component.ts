import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit{

  capachino: Coffee = new Coffee( "12504886","capachino", 3.50, 200, []);
  latte: Coffee = new Coffee("125066546", "latte", 3.50, 220,[]);
  flatWhite: Coffee = new Coffee("125066846", "flat white", 3.50, 180,[]);

  coffees: Coffee[] = [this.capachino, this.flatWhite, this.latte];
  
  isLoggedIn: boolean = this.authService.getIsAuthenticated();

  constructor(private coffeeService: CoffeeService, private authService: AuthService){}
  
  ngOnInit() {
     this.coffeeService.getCoffees()
     .subscribe(data => {
      this.coffees = this.coffees.concat(data);
    });
  }
}
