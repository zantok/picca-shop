import { CartItem } from "./cart-item.model";

export class Cart {
  public cartItems: CartItem[];

  constructor(cartItems: CartItem[]){
    this.cartItems=cartItems;

  }
}
