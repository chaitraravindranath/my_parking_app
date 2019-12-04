import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  validateUser(user:any){
     return this.httpClient.get<any[]>('http://localhost:3000/users?UserName='+user.UserName+'&password='+user.passwd);
  }

  getUserInfo(UserName:string):Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:3000/users?UserName='+UserName);
  }

  registerUser(UserName, Password, Role, FullName, UserMobile, UserEmail){
    const obj = {
      UserName,
      Password,
      Role,
      FullName,
      UserMobile,
      UserEmail
    };
    this.httpClient.post("http://localhost:3000/users/", obj) .subscribe(res => 
    alert("User Registration Successful!"));  
  }

  getUsers() {
    return this.httpClient.get("http://localhost:3000/users");
  }

  getParkingLots(){
    return this.httpClient.get("http://localhost:3000/parkinglots");
  }

  getBookedParkingLots(){
    return this.httpClient.get("http://localhost:3000/bookedParkingLots");
  }

  validateParkingLot(parkinglot:any){
    return this.httpClient.get<any[]>('http://localhost:3000/bookedParkingLots?UserParkingSlotNumber='+parkinglot.UserParkingSlotNumber);
 }

  deleteUser(id: any) {
    return this.httpClient.delete("http://localhost:3000/users/"+id);
  }

  deleteParkingFromAvailableList(id: any){
    return this.httpClient.delete("http://localhost:3000/parkinglots/"+id);
  }

  bookParking(id:any) {  
    return this.httpClient.get("http://localhost:3000/parkinglots/" +id);  
  } 
  
  confirmBooking(UserParkingStartDate, UserParkingEndDate, UserParkingLot, UserParkingLevel, UserParkingSlotNumber, UserParkingType){
    const obj = {
      UserParkingStartDate,
      UserParkingEndDate,
      UserParkingLot,
      UserParkingLevel,
      UserParkingSlotNumber,
      UserParkingType,
    };
    console.log(obj);
    this.httpClient.post("http://localhost:3000/bookedParkingLots/",obj) .subscribe(res => 
    alert("Parking Booked Successfully!"));  
    this.deleteParkingFromAvailableList(obj);
  }

  getParkingInfo(id:any) {  
    return this.httpClient.get("http://localhost:3000/bookedParkingLots/" +id);  
  } 

  updateParking(UserParkingLot,UserParkingLevel, UserParkingSlotNumber, UserParkingType, id:any) {  
     const obj = {  
      UserParkingLot,
      UserParkingLevel,
      UserParkingSlotNumber,
      UserParkingType 
    };  
    this.httpClient.put("http://localhost:3000/parkinglots/" +id,obj).subscribe(res => {
      console.log("---res---",+JSON.stringify(res));
    });
  }
    
    surrenderParking(UserParkingStartDate, UserParkingEndDate, UserParkingLot ,UserParkingLevel, UserParkingSlotNumber, UserParkingType, id: any){
      const obj = {
        UserParkingStartDate,
        UserParkingEndDate,
        UserParkingLot,
        UserParkingLevel,
        UserParkingSlotNumber,
        UserParkingType,
      };
      this.httpClient.post("http://localhost:3000/parkinglots/",obj) .subscribe(res => 
      alert("Parking surrendered Successfully!"));   
    }
}  

