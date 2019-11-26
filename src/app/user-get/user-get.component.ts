import { Component, OnInit } from '@angular/core';
import User from '../User';  
import { UsersService } from '../users.service'; 

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})

export class UserGetComponent implements OnInit {

  users: User[]; 
  config: any;
  constructor(private ps: UsersService) {
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.users
    };
   }  

  ngOnInit() {  
      this.fetchData();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  fetchData(){
    this.ps.getUsers().subscribe((data: User[]) => {  
      this.users = data;  
  }); 
  }

  deleteUser(id: any) { 
    debugger
    this.ps.deleteUser(id).subscribe(res => { 
      console.log("res"+JSON.stringify(res));
      this.fetchData(); 
    });  
}

}
