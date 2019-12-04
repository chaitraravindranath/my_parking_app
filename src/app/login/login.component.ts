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
         UserName: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(5)
         ])),
         passwd: new FormControl("", Validators.required)
      });
   }

   onClickSubmit(data) {
      this.usersService.validateUser(data).subscribe(logindata => {
         if (logindata.length > 0) {
            this.usersService.getUserInfo(logindata[0].UserName).subscribe(data => {
               if (data[0]['Role'] == "Admin") {
                  this.router.navigate(['/users']);
               }
               else if (data[0]['Role'] == "Guest") {
                  this.router.navigate(['/getparking']);
               }
               else if (data[0]['Role'] == "VIP") {
                  this.router.navigate(['/myparking',data[0]['id']]);
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


