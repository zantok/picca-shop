import { Injectable } from "@angular/core";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { Product } from "./product.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [];
  // [
  //   new Product(
  //     "pizza",
  //     "Salami pizza",
  //     "https://previews.123rf.com/images/boarding1now/boarding1now1212/boarding1now121200021/16690745-fresh-salami-pizza-isolated-on-white-background.jpg?utm_source=shareasale&utm_medium=affiliate&utm_campaign=742098_1195097&sscid=41k5_g5oic",
  //     "description",
  //     10,
  //     [new Ingredient("Base", 1), new Ingredient("Salami", 2), new Ingredient("cheese",2)]
  //   ),
  //   new Product(
  //     "pizza",
  //     "Bacon pizza",
  //     "https://www.pngkey.com/png/detail/2-23987_cheese-and-bacon-pizza.png",
  //     "description",
  //     10,
  //     [new Ingredient("Base", 1), new Ingredient("Bacon", 2), new Ingredient("cheese", 3)]
  //   ),
  // ];

  constructor(private slService: ShoppingListService) {}

  sendProductToSL(product: Product) {
    this.slService.addProduct(product);
  }
  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }
  getProducts() {
    return this.products.slice();
  }
  getProduct(id: number) {
    return this.products[id];
  }
  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }
  updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    this.productsChanged.next(this.products.slice());
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }

}
