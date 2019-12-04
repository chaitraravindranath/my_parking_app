import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;  
  constructor(private fb: FormBuilder, private ps: UsersService,private route: ActivatedRoute, private router: Router) {  
    this.createForm();  
  }

  createForm() {  
    this.registerForm = this.fb.group({  
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
      Role:['', Validators.required],
      FullName: ['', Validators.required],
      UserMobile: ['', Validators.required],
      UserEmail:['', Validators.required],
    });  
  }  
  
  ngOnInit() { }

  registerUser(UserName, Password, Role, FullName, UserMobile, UserEmail) { 
    this.route.params.subscribe(params => {
      this.ps.registerUser(UserName, Password, Role, FullName, UserMobile, UserEmail); 
      this.router.navigate(['']);
    });
  }  
}

