import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './adduser.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdduserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'' ,component:AdduserComponent}
])
  ]
})
export class AdduserModule { }
