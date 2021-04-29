import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductService } from "../product/product.service";
import { Product } from "../product/product.model";
import { map,tap } from "rxjs/operators";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Cart } from "./cart.model";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  cart: Cart;

  constructor(private http: HttpClient,
    private productService: ProductService,
    private ShoppingListService: ShoppingListService,
    private userService: UserService
    ) {}

  storeProducts() {
    this.cart = new Cart(this.ShoppingListService.getProducts());
    // this.cart.cartItems = this.ShoppingListService.getProducts();

    console.log(JSON.stringify(this.cart));
    this.http.post("http://localhost:8080/shopping-list?name="+this.userService.currentUser.name, this.cart).subscribe((response) => {
      console.log(response);
    });
  }
  fetchProducts() {
    return this.http
      .get<Product[]>("http://localhost:8080/products?type=pizza")
      .pipe(
        map((products) => {
          return products.map((product) => {
            return {
              ...product
            };
          });
        }),
        tap(products => {
          this.productService.setProducts(products);
          console.log(products);
        })
      )
  }
  fetchUser(name:string){
    return this.http.get<User>("http://localhost:8080/user?name="+name)
    .pipe(
      tap(user =>{
        this.userService.setUser(user);
      })
    );
  }
  addUser(name:string){
    this.http.post<User>("http://localhost:8080/user?name="+name,null).pipe(
      tap(user =>{
        console.log(user);
        this.userService.setUser(user);
      })).subscribe();
  }
}
