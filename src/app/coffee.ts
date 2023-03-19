export class Coffee {
     id: string ="";
     name: string= "";
     price: number;
     kcals: number;
     ingridents = [];

     constructor(id:string, name:string, price:number, kcals:number,ingridentd:[]){
          this.id = id;
          this.name = name;
          this.price = price;
          this.kcals = kcals;
          this.ingridents = this.ingridents;
     }

     getPrice(){
          return this.price;
     }
}

