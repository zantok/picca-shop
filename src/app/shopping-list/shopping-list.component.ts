import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Product } from "../product/product.model";
import { CartItem } from "../shared/cart-item.model";
import { DataStorageService } from "../shared/data-storage.service";
import { UserService } from "../shared/user.service";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {

  loggedIn = false;
  constructor(private shoppingListService: ShoppingListService,
    private dataStorageService: DataStorageService,
    private userService:UserService) {}
  subscription: Subscription;
  loginSubscription : Subscription;

  products: CartItem[] = this.shoppingListService.getProducts();

  ngOnInit() {
    this.subscription = this.shoppingListService.shoppingList.subscribe(() => {
      this.products = this.shoppingListService.getProducts();
    });
    this.loginSubscription = this.userService.loggedInSubj.subscribe(() =>{
      this.loggedIn = this.userService.loggedIn;
    })
  }

  onDeleteFromBasket(index: number) {
    this.shoppingListService.deleteProduct(index);
  }
  onDeleteItem(index:number){
    this.shoppingListService.removeFromCart(index);
  }
  onAddItem(index: number) {
    this.shoppingListService.ascendProduct(index);
  }
  onCheckout(){
    if (this.loggedIn) {
      this.dataStorageService.storeProducts();
      this.shoppingListService.deleteProductsFromSL();
    } else {
      console.log("please login");
    }
  }
}
