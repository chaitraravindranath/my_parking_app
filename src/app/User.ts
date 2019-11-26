export default class User {  
    UserSAPID: number;
    FullName: string;
    UserMobile: string;
    UserEmail: string;
    UserParkingStartDate: string;
    UserParkingEndDate: string;
    UserParkingStartTime: string;
    UserParkingEndTime: string;
    UserParkingLot:string;
    UserParkingLevel: string;
    UserParkingSlotNumber: number;
    UserParkingType: string;
    UserParkingAvailabilityStatus:string;
    UserVehicleType: string;
    UserVehicleLicensePlateNumber: string;
  } 
  
  export  interface  LoginUser {
    email: string;
    password: string;
}