import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';



@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
            {path:'' ,component:UserDetailsComponent},
    
    ])
    
  ]
})
export class UserdetailsModule { }
