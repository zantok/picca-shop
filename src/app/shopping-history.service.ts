import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from './shared/order.model';
import { UserService } from './shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingHistoryService {
  shoppingHistory = new Subject<Order[]>();

  public orderList: Order[]=[];


  constructor(private userService:UserService) { }

  setOrders(orders: Order[]){
    this.orderList=orders;
    this.shoppingHistory.next(this.orderList.slice());
  }

  getOrders() {
    return this.orderList.slice();
  }

}
