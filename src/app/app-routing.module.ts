import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { LoginComponent } from './login/login.component';
import { BookParkingComponent } from './book-parking/book-parking.component';
import { GetParkingComponent } from './get-parking/get-parking.component';
import { MyParkingComponent } from './my-parking/my-parking.component';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'users', component: GetUserComponent },
  { path: 'getparking', component: GetParkingComponent },
  { path: 'bookparking/:id', component: BookParkingComponent },
  { path: 'myparking/:id', component: MyParkingComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }  