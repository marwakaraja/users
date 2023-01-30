import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IUser } from '../user';
import UserDetailsService from './userdetails.service';

import UserService from './userdetails.service';

@Component({
 // selector: 'app-employee-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export  class UserDetailsComponent implements OnInit {

  title:string | null="user details";
  imagewidth:number=100;
  imagemargin:number=10;
  id:number=1;
  userdetails?:any;
  
  
  constructor(private route: ActivatedRoute,private adduserservice:UserDetailsService, private router:Router)
  {
    console.log(route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
   this.id =(Number)(this.route.snapshot.paramMap.get('id'));
   this.getUserdetails();
  
    
   
    }
    getUserdetails() {
      this.adduserservice.getuserdetails(this.id)
      
        .subscribe((response: any) => {
          this.userdetails = response.data;
        });
      }

        Onback() {
          this.router.navigate(['/users']);
          }
  
  }
  
  

