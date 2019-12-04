import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import User from '../User';

@Component({
  selector: 'app-book-parking',
  templateUrl: './book-parking.component.html',
  styleUrls: ['./book-parking.component.css']
})
export class BookParkingComponent implements OnInit {

  bookingForm: FormGroup;
  user: any = {};
  users: User[];

  constructor(private route: ActivatedRoute, private router: Router, private ps: UsersService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.bookParking(params['id']).subscribe(res => {
        this.user = res;
        if (this.user) {
          this.bookingForm.patchValue({
            UserParkingLot: this.user.UserParkingLot,
            UserParkingLevel: this.user.UserParkingLevel,
            UserParkingSlotNumber: this.user.UserParkingSlotNumber,
            UserParkingType: this.user.UserParkingType,
          });
        }
      });
    });

  }

  createForm() {
    this.bookingForm = this.fb.group({
      UserParkingStartDate: ['', Validators.required],
      UserParkingEndDate: ['', Validators.required],
      UserParkingLot: [{ value: '', disabled: true }, Validators.required],
      UserParkingLevel: [{ value: '', disabled: true }, Validators.required],
      UserParkingSlotNumber: [{ value: '', disabled: true }, Validators.required],
      UserParkingType: [{ value: '', disabled: true }, Validators.required],
    });
  }

  confirmBooking(UserParkingStartDate, UserParkingEndDate, UserParkingLot, UserParkingLevel, UserParkingSlotNumber, UserParkingType) {
         this.route.params.subscribe(params => {
            this.ps.confirmBooking(UserParkingStartDate, UserParkingEndDate, UserParkingLot, UserParkingLevel, UserParkingSlotNumber, UserParkingType);      
            this.deleteFromAvailableParking(UserParkingSlotNumber);
            this.router.navigate(['/myparking',UserParkingSlotNumber]);
          });
  }

  deleteFromAvailableParking(UserParkingSlotNumber){
    this.ps.deleteParkingFromAvailableList(UserParkingSlotNumber).subscribe(res => { 
        console.log(res);
    });  
  }
}
