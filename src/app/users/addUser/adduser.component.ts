import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AddUserService from './adduser.service';
import UserService from './adduser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export  class AdduserComponent {

  form!: FormGroup;
  message:string="user added successfully";
  isadded:boolean =false;

   
  constructor(
    public createuserservice: AddUserService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required ]),
      job: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }

submit(){
  console.log(this.form.value);
  this.createuserservice.create(this.form.value).subscribe(res => {
       console.log('user is added successfully!');
       this.isadded= ! this.isadded;
       
  })
}



}
