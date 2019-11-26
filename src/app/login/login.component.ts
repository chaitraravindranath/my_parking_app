import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   formdata;
   constructor(private router: Router, private usersService: UsersService) { }

   ngOnInit() {
      this.formdata = new FormGroup({
         username: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(5)
         ])),
         passwd: new FormControl("", this.passwordvalidation)
      });
   }

   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return { "passwd": true };
      }
   }

   onClickSubmit(data) {
      this.usersService.validateUser(data).subscribe(logindata => {
         console.log(logindata);
         if (logindata.length > 0) {
            console.log(logindata[0].UserName);
            this.usersService.getUserInfo(logindata[0].UserName).subscribe(data => {
               if (data[0]['Role'] == "Admin") {
                  alert("Login Successful");
                  this.router.navigate(['/users']);
               }
               else if (data[0]['role'] == "Guest User") {
                  this.router.navigate(['/search/guestUserParking']);
               }
               else if (data[0]['role'] == "VIP User") {
                  this.router.navigate(['/search/VIPUserParking']);
               }
            })
         }
         else {
            alert("Invalid Login");
            return false;
         }
      });
   }
}


