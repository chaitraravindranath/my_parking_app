import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'createUser', component: UserAddComponent },
  { path: 'edit/:id', component: UserEditComponent },
  { path: 'users', component: UserGetComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }  