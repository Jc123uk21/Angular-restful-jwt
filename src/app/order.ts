import { DatePipe } from "@angular/common";
import { Coffee } from "./coffee";
import { User } from "./user";

export class Order {
    user: User;
    ordered: Array<Coffee>;
    orderDateTime: Date;
    orderTotalPrice: number;
    store: string;

    constructor(){

    }

    submitOrder(){

    }

}
