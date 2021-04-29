import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Product } from "../product/product.model";
import { CartItem } from "../shared/cart-item.model";
import { DataStorageService } from "../shared/data-storage.service";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService,private dataStorageService: DataStorageService) {}
  subscription: Subscription;

  products: CartItem[] = this.shoppingListService.getProducts();

  ngOnInit() {
    this.subscription = this.shoppingListService.shoppingList.subscribe(() => {
      this.products = this.shoppingListService.getProducts();
    });
  }

  onDeleteFromBasket(index: number) {
    this.shoppingListService.deleteProduct(index);
  }
  onAddItem(index: number) {
    this.shoppingListService.ascendProduct(index);
  }
  onCheckout(){
    this.dataStorageService.storeProducts();
    this.shoppingListService.deleteProductsFromSL();
  }
}
