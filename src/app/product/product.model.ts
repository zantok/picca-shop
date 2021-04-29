export class Product {
  public id: number;
  public productType: string;
  public productName: string;
  public pictureUrl: string;
  public description: string;
  public price: number;

  constructor(
    id:number,
    productType: string,
    productName: string,
    pictureUrl: string,
    description: string,
    price:number,
  ) {
    this.id = id;
    this.productType=productType;
    this.productName = productName;
    this.description = description;
    this.pictureUrl = pictureUrl;
    this.price= price;
  }
}
