import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { OrderItemComponent } from './order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    ProductItemComponent,
    ShoppingListComponent,
    ShoppingHistoryComponent,
    OrderItemComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
