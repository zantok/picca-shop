import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProductResolverService } from './product/product-resolver.service';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {path:'', component: FrontPageComponent, resolve: [ProductResolverService]},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'history', component: ShoppingHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
