import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product;
  @Input() index:number;

  constructor(
    private productService: ProductService,
    private shoppingListService: ShoppingListService
  ){}

  onAddtoShoppingCart(){
    this.shoppingListService.addProduct(this.product);
    console.log(this.product);
    console.log(this.index);
  }
  ngOnInit() {
  }

}
