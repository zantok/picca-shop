import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product[]>{

  constructor(private dataStorageService:DataStorageService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    return this.dataStorageService.fetchProducts();
  }
}
