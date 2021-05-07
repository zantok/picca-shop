import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order:Order;
  @Input() index:number;

  constructor() { }

  ngOnInit() {
  }

}
