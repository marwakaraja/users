import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from './local.service';
import { LoginserviceService } from './loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  currentuser:any;
  

  

  constructor( private fb:FormBuilder, 
    private authenticationService:LoginserviceService,
    private router:Router ,
    private localservice:LocalService
    ){}
ngOnInit(): void {
 
  this.loginForm=new FormGroup({
    email :new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)])
    
  })
}
get f(){
  return this.loginForm.controls;
}


sendformdata() {
 // this.loginInfo=form.value;
console.log(this.loginForm.value);
 this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data =>{
  
  this.localservice.saveData("isAuthentication","true"),
  this.localservice.saveDataUser("currentuser",JSON.stringify(data))
  this.router.navigate(['/users']);
  
 }
  
);
                
}
 

  
}
