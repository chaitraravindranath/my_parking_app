import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUserComponent } from './get-user/get-user.component';
import { UsersService } from './users.service';  
import { NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { GetParkingComponent } from './get-parking/get-parking.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BookParkingComponent } from './book-parking/book-parking.component';
import { MyParkingComponent } from './my-parking/my-parking.component';

@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    HeaderComponent,
    LoginComponent,
    GetParkingComponent,
    RegisterUserComponent,
    BookParkingComponent,
    MyParkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
