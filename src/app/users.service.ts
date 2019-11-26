import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  validateUser(user:any){
     return this.httpClient.get<any[]>('http://localhost:3000/users?UserName='+user.username+'&password='+user.passwd);
  }

  getUserInfo(UserName:string):Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:3000/users?UserName='+UserName);
  }

  addUser(UserSAPID, FullName, UserMobile, UserEmail) {
    const obj = {
      UserSAPID,
      FullName,
      UserMobile,
      UserEmail
      // UserParkingStartDate,
      // UserParkingEndDate,
      // UserParkingStartTime,
      // UserParkingEndTime,
      // UserParkingLot,
      // UserParkingLevel,
      // UserParkingSlotNumber,
      // UserParkingType,
      // UserParkingAvailabilityStatus
    };
    console.log(obj);
    this.httpClient.post("http://localhost:3000/users/", obj) .subscribe(res => 
    alert("Succesfully Added user details"));   
  }

  getUsers() {
    return this.httpClient.get("http://localhost:3000/users");
  }

  editUser(id: any) {
    return this.httpClient.get("http://localhost:3000/users/"+id);
  }

  updateUser(id: any, UserSAPID, FullName, UserMobile, UserEmail) {
    const obj = {
      UserSAPID,
      FullName,
      UserMobile,
      UserEmail
      // UserParkingStartDate,
      // UserParkingEndDate,
      // UserParkingStartTime,
      // UserParkingEndTime,
      // UserParkingLot,
      // UserParkingLevel,
      // UserParkingSlotNumber,
      // UserParkingType,
      // UserParkingAvailabilityStatus,
      // UserVehicleType,
      // UserVehicleLicensePlateNumber
    };
    this.httpClient.put("http://localhost:3000/users/" + id,obj).subscribe(res => 
    alert("Succesfully Updated User details"));     
  }

  deleteUser(id: any) {
    debugger
    alert(id);
    return this.httpClient.delete("http://localhost:3000/users/"+id);
  }

} 