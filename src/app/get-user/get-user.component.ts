import { Component, OnInit } from '@angular/core';
import User from '../User';  
import { UsersService } from '../users.service'; 

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})

export class GetUserComponent implements OnInit {

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
    this.ps.deleteUser(id).subscribe(res => { 
      this.fetchData(); 
    });  
}

}
