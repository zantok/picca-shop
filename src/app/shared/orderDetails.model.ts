import { Product } from "../product/product.model";

export class OrderDetails {
    public id:number;
    public order_id:number;
    public price:number;
    public product:Product;
    public quantity:number;

    constructor(id:number,order_id:number, price:number, product:Product, quantity:number) {
        this.id=id;
        this.order_id=order_id;
        this.price=price;
        this.product=product;
        this.quantity=quantity;
    }
}