import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeModule } from './welcomepage/welcome.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent 
   
  ],
  exports:[ReactiveFormsModule],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WelcomeModule,
    LoginModule,
    RouterModule.forRoot([
      {path:'users',loadChildren:() => import('./users/user.module').then(m => m.UserModule)},
      {path:'addnewuser' ,loadChildren:() => import('./users/addUser/adduser.module').then(m => m.AdduserModule)},
      {path:'users/:id' ,loadChildren:() => import('./users/userDetails/userdetails.module').then(m => m.UserdetailsModule)},
     
  
      {path:'' ,redirectTo:'welcome',pathMatch:'full'},
      {path:'**' ,redirectTo:'welcome',pathMatch:'full'},
    ]),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
