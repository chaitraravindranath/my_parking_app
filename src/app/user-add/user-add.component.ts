import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;  
  constructor(private fb: FormBuilder, private ps: UsersService,private route: ActivatedRoute, private router: Router) {  
    this.createForm();  
  }

  createForm() {  
    this.angForm = this.fb.group({  
      UserSAPID: ['', Validators.required], 
      FullName: ['', Validators.required],
      UserMobile: ['', Validators.required],
      UserEmail:['', Validators.required],
      // UserParkingStartDate: ['', Validators.required],
      // UserParkingEndDate:['', Validators.required],
      // UserParkingStartTime: ['', Validators.required],
      // UserParkingEndTime: ['', Validators.required],
      // UserParkingLot:['', Validators.required],
      // UserParkingLevel: ['', Validators.required],
      // UserParkingSlotNumber: ['', Validators.required],
      // UserParkingType: ['', Validators.required],
      // UserParkingAvailabilityStatus: ['', Validators.required], 
      // UserVehicleType: ['', Validators.required],
      // UserVehicleLicensePlateNumber: ['', Validators.required], 
    });  
  }  
  
  ngOnInit() { }

  addUser(UserSAPID, FullName, UserMobile, UserEmail) { 
    console.log(UserSAPID, FullName, UserMobile, UserEmail);
    this.route.params.subscribe(params => {
      this.ps.addUser(UserSAPID, FullName, UserMobile, UserEmail); 
      this.router.navigate(['/users']);
    });
  }  
}
