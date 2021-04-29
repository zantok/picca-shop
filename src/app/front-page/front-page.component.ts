import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    if (this.products.length === 0) {
      this.products = this.productService.getProducts();
    }
  }

}
