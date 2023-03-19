import { Component } from '@angular/core';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart = new Array<Coffee>;
  total: number;
  constructor(){
    this.total  = 0;
  }

  getCartTotal(): number{
    for(const coffee of this.cart){
      this.total = this.total + coffee.price;
    }
    return this.total;
  }

  removeItem(coffee: Coffee){
    this.cart = this.cart.filter(coffee => coffee.id !== coffee.id);
  }

  checkOut(){
    
  }
}
