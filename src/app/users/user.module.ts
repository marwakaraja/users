import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdduserModule } from './addUser/adduser.module';
import { UserdetailsModule } from './userDetails/userdetails.module';



@NgModule({
  declarations: [
    UserComponent,
    
  ],
  exports:[
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'' ,component:UserComponent},
    ])
      
  ]
})
export class UserModule { }
