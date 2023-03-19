import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { ServicesComponent } from './services/services.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { StoresComponent } from './stores/stores.component';
import { CartComponent } from './cart/cart.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LoginFormComponent,
    CoffeeListComponent,
    ServicesComponent,
    UserInfoComponent,
    StoresComponent,
    CartComponent,
    UserHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
