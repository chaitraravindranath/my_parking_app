import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import User from '../User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  angForm: FormGroup;
  user: any = {};
  users: User[];

  constructor(private route: ActivatedRoute, private router: Router, private ps: UsersService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      UserSAPID: [{ value: '', disabled: true }, Validators.required],
      FullName: ['', Validators.required],
      UserMobile: ['', Validators.required],
      UserEmail: ['', Validators.required],
      // UserParkingStartDate: ['', Validators.required],
      // UserParkingEndDate: ['', Validators.required],
      // UserParkingStartTime: ['', Validators.required],
      // UserParkingEndTime: ['', Validators.required],
      // UserParkingLot: ['', Validators.required],
      // UserParkingLevel: ['', Validators.required],
      // UserParkingSlotNumber: ['', Validators.required],
      // UserParkingType: ['', Validators.required],
      // UserParkingAvailabilityStatus: ['', Validators.required],
      // UserVehicleType: ['', Validators.required],
      // UserVehicleLicensePlateNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editUser(params['id']).subscribe(res => {
        this.user = res;
        console.log(JSON.stringify(this.user));
        if (this.user) {
          this.angForm.patchValue({
            UserSAPID: this.user.id,
            FullName: this.user.FullName,
            UserMobile: this.user.UserMobile,
            UserEmail: this.user.UserEmail,
            // UserParkingStartDate: this.user.UserParkingStartDate,
            // UserParkingEndDate : this.user.UserParkingEndDate,
            // UserParkingStartTime : this.user.UserParkingStartTime,
            // UserParkingEndTime : this.user.UserParkingEndTime,
            // UserParkingLot: this.user.UserParkingLot,
            // UserParkingLevel : this.user.UserParkingLevel,
            // UserParkingSlotNumber: this.user.UserParkingSlotNumber,
            // UserParkingType: this.user.UserParkingType,
            // UserParkingAvailabilityStatus: this.user.UserParkingAvailabilityStatus,
            // UserVehicleType : this.user.UserVehicleType,
            // UserVehicleLicensePlateNumber: this.user.UserVehicleLicensePlateNumber
          });
        }
      });
    });

  }

  fetchData() {
    this.ps.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  updateUser(UserSAPID, FullName, UserMobile, UserEmail) {
    this.route.params.subscribe(params => {
      this.ps.updateUser(params.id, UserSAPID, FullName, UserMobile, UserEmail);
      this.fetchData();
      this.router.navigate(['/users']);
    });
  }
}  
