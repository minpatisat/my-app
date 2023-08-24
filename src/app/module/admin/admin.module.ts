import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';


import { AddCustmerComponent } from './add-custmer/add-custmer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './add-car/add-car.component';

import { EditComponent } from './edit/edit.component';
import { CarsComponent } from './cars/cars.component';
import { RentcarAdminComponent } from './rentcar-admin/rentcar-admin.component';
import { AddRentcarComponent } from './add-rentcar/add-rentcar.component';








@NgModule({
  declarations: [

   EditComponent,
    AddCustmerComponent,
    AddCarComponent,
  CarsComponent,
  RentcarAdminComponent,
  AddRentcarComponent
    
  



  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AdminRoutingModule

  ]
})
export class AdminModule { }
