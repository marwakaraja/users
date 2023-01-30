import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IUser } from "../user";

@Injectable({
    providedIn:'root'
})
export default class UserDetailsService{
    
    constructor(private http:HttpClient)
      { }
     private usersUrl="https://reqres.in/api/users";
     
    
         getuserdetails(id :number){ 
            return this.http.get<any>(this.usersUrl+'/'+id).pipe(
              tap(data=>console.log(JSON.stringify(data))),
              catchError( this.handleError));
               
         }
         
        

          handleError(err:HttpErrorResponse){
            let message='';
            if(err.error instanceof ErrorEvent)
            message=`client side erroe happened : ${err.error.message}`;
            else
            message=`server error :status:${err.status}  ${err.message}` ;
            console.log(message);
            return throwError(()=>message);
          }
   
    }

