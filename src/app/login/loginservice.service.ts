import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  private loginurl="https://reqres.in/api/login";

  login(email: string, password: string) {
    
     return this.http.post<any>(this.loginurl, { email: email, password: password })
            
    
            

      
}

  
}
