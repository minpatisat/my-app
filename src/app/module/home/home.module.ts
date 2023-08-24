import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RentcarComponent } from './rentcar/rentcar.component';
import { CarComponent } from './car/car.component';
import { RegisterComponent } from './register/register.component';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { Cardetail2Component } from './cardetail2/cardetail2.component';
import { Cardetail3Component } from './cardetail3/cardetail3.component';
import { Cardetail4Component } from './cardetail4/cardetail4.component';
import { Cardetail5Component } from './cardetail5/cardetail5.component';
import { Cardetail6Component } from './cardetail6/cardetail6.component';
import { Cardetail7Component } from './cardetail7/cardetail7.component';
import { Cardetail8Component } from './cardetail8/cardetail8.component';
import { Cardetail9Component } from './cardetail9/cardetail9.component';
import { EkycComponent } from './ekyc/ekyc.component';







@NgModule({
  declarations: [
    LoginComponent,
    ContactComponent,
    RentcarComponent,
    CarComponent,
    RegisterComponent,
    EditPersonalComponent,
    EditPasswordComponent,
    ReceiptComponent,
    CardetailsComponent,
    Cardetail2Component,
    Cardetail3Component,
    Cardetail4Component,
    Cardetail5Component,
    Cardetail6Component,
    Cardetail7Component,
    Cardetail8Component,
    Cardetail9Component,
    EkycComponent,
  


   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgxPermissionsModule.forChild(),
    ReactiveFormsModule
  ]
})
export class HomeModule { }
