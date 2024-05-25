import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomePageGuestComponent } from './home-page-guest/home-page-guest.component';
import { HomePageWaiterComponent } from './home-page-waiter/home-page-waiter.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomePageGuestComponent,
    HomePageWaiterComponent,
    LoginAdminComponent,
    HomePageAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
