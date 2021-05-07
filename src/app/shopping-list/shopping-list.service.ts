import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product/product.model';
import { CartItem } from '../shared/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingList = new Subject<CartItem[]>();
  containsItem: boolean;
  cartItems: CartItem[] = [];
  private includedProductIds: number[] = [];
  startedEditing = new Subject<number>();

  constructor() { }
  addProduct(product:Product){
    if (this.includedProductIds.includes(product.id)) {
      this.cartItems.forEach(item => {
        if (item.product.id === product.id){
          item.count++;
        }
      });
    } else {
      this.cartItems.push(new CartItem(product,1));
      this.includedProductIds.push(product.id);
    }
    this.shoppingList.next(this.cartItems.slice());
  }


  getProducts(){
    return this.cartItems.slice();
  }

  deleteProduct(index : number) {
    if (this.cartItems[index].count>1) {
      this.cartItems[index].count--;
    } else {
      this.includedProductIds.splice(index,1);
      this.cartItems.splice(index,1)
    }
    this.shoppingList.next(this.cartItems.slice());
  }
  removeFromCart(index: number) {
    this.includedProductIds.splice(index,1);
    this.cartItems.splice(index,1)
    this.shoppingList.next(this.cartItems.slice());
  }
  ascendProduct(index : number) {
    this.cartItems[index].count++;
    this.shoppingList.next(this.cartItems.slice());
  }
  deleteProductsFromSL(){
    this.cartItems=[];
    this.includedProductIds = [];
    this.shoppingList.next(this.cartItems.slice());
  }
}
