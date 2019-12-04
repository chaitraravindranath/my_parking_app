import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import User from '../User';

@Component({
  selector: 'app-my-parking',
  templateUrl: './my-parking.component.html',
  styleUrls: ['./my-parking.component.css']
})
export class MyParkingComponent implements OnInit {

  myForm: FormGroup;
  user: any = {};
  users: User[];

  constructor(private route: ActivatedRoute, private router: Router, private ps: UsersService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      UserParkingLot: ['', Validators.required],
      UserParkingLevel: ['', Validators.required],
      UserParkingSlotNumber: ['', Validators.required],
      UserParkingType: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.getParkingInfo(params['id']).subscribe(res => {
        this.user = res;
        if (this.user) {
          this.myForm.patchValue({
            UserParkingLot: this.user.UserParkingLot,
            UserParkingLevel: this.user.UserParkingLevel,
            UserParkingSlotNumber: this.user.UserParkingSlotNumber,
            UserParkingType: this.user.UserParkingType
          });
        }
      });
    });
  }

  fetchData() {
    this.ps.getParkingLots().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  surrenderParking(UserParkingStartDate, UserParkingEndDate, UserParkingLot, UserParkingLevel, UserParkingSlotNumber, UserParkingType, id) {
    this.route.params.subscribe(params => {
      this.ps.surrenderParking(UserParkingStartDate, UserParkingEndDate, UserParkingLot, UserParkingLevel, UserParkingSlotNumber, UserParkingType, params.id);
    });
  }
}
