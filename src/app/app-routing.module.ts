import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicesComponent } from './services/services.component';
import { StoresComponent } from './stores/stores.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
 { path: "", component: HomeComponent},
 {path:"login-page", component: LoginFormComponent},
 {path: "home", component: HomeComponent},
 {path:"register", component: RegistrationComponent},
 {path:"coffees", component: CoffeeListComponent},
 {path:"services", component: ServicesComponent},
 {path:"stores", component: StoresComponent},
 {path:"cart", component: CartComponent},
 {path:"userHome", component: UserHomeComponent},
 {path:"my-account", component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
