import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Order } from '../shared/order.model';
import { UserService } from '../shared/user.service';
import { ShoppingHistoryService } from '../shopping-history.service';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {

  public orderList: Order[]=[];
  subsription:Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private shoppingHistoryService:ShoppingHistoryService,
    private userService:UserService
    ) { }

  ngOnInit() {
    console.log(this.userService.currentUser.id)
    this.dataStorageService.fetchOrderHistory(this.userService.currentUser.id).subscribe();
    this.subsription = this.shoppingHistoryService.shoppingHistory.subscribe(() => {
      this.orderList = this.shoppingHistoryService.getOrders();
    });
  }

}
