import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageGuestComponent } from './home-page-guest/home-page-guest.component';
import { HomePageWaiterComponent } from './home-page-waiter/home-page-waiter.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'logadmin', component: LoginAdminComponent},
  {path: 'reg', component: RegistrationComponent},
  {path: 'homeguest', component:HomePageGuestComponent},
  {path: 'homewaiter', component:HomePageWaiterComponent},
  {path: 'homeadmin', component:HomePageAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
