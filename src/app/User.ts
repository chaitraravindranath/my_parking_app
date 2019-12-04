export default class User {  
    FullName: string;
    UserMobile: string;
    UserEmail: string;
    UserParkingStartDate: string;
    UserParkingEndDate: string;
    UserParkingLot:string;
    UserParkingLevel: string;
    UserParkingSlotNumber: number;
    UserParkingType: string;
  } 
  
  export  interface  LoginUser {
    email: string;
    password: string;
}