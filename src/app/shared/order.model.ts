import { OrderDetails } from "./orderDetails.model";
import { User } from "./user.model";

export class Order {
    public id: number;
    public user: User;
    public date: String;
    public price: number;
    public isAccepted: boolean;
    public items: OrderDetails[];
    constructor(id:number, user:User, date:String, price:number, isAccepted:boolean, items: OrderDetails[]){
        this.id=id;
        this.user=user;
        this.date=date;
        this.price=price;
        this.isAccepted=isAccepted;
        this.items = items;
    }

}