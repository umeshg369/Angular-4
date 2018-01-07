import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';
import { SignupComponent } from './signup/signup.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: AddToCartComponent },
  { path: 'customer', component: CustomerDataComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    FeaturedProductsComponent,
    RecommendedProductsComponent,
    SignupComponent,
    AddToCartComponent,
    CustomerDataComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
