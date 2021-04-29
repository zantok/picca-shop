import { Product } from "../product/product.model";

export class CartItem {
  constructor(product: Product, count: number) {
    this.count = count;
    this.product = product;
  }
  public product: Product;
  public count: number;
}
