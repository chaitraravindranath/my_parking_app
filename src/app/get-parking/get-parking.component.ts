import { Component, OnInit } from '@angular/core';
import User from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-parking',
  templateUrl: './get-parking.component.html',
  styleUrls: ['./get-parking.component.css']
})

export class GetParkingComponent implements OnInit {

  users: User[];

  constructor(private ps: UsersService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.ps.getParkingLots().subscribe((data: User[]) => {  
      this.users = data;  
  }); 
  }

}

