import { Component } from '@angular/core';
import { Router } from '@angular/router';
import EmployeeService from './users.service';
import UserService from './users.service';

@Component({
  selector: 'app-employee',
  templateUrl: './user.component.html',
  styleUrls :['./user.component.css'],
  providers:[EmployeeService]
})
export  class UserComponent {

  users:any;
  p: number = 1;
  total: number = 0;
  title  = '';
  imagewidth:number=50;
  imagemargin:number=2;
  displayimage:boolean=false;
  
  
  constructor(  private userservice:UserService,
  private router:Router){
    
    
  }
  
  ngOnInit():void{
    this.getUsers();
    
   
  }
  
  getUsers(){
    this.userservice.getusers(this.p)
      .subscribe((response: any) => {
        this.users = response.data;
        this.total = response.total;
      });
      
} 


      pageChangeEvent(event: number){
        this.p = event;
        this.getUsers();
    }

   
 

  Movetouserpage() {
    this.router.navigate(['/addnewuser']);
    }

}

