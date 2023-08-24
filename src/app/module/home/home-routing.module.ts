import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { RentcarComponent } from './rentcar/rentcar.component';
import { CarComponent } from './car/car.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
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


const routes: Routes = [
  {path :'',component : HomeComponent },
  {path :'login',component : LoginComponent },
  {path :'register',component : RegisterComponent },
  {path :'contact',component : ContactComponent },
  {path :'rentcar',component : RentcarComponent },
  {path :'car',component : CarComponent },
  {path :'edit-password',component : EditPasswordComponent },
  {path :'edit-personal',component : EditPersonalComponent },
  {path :'receipt',component : ReceiptComponent },
  {path :'cardetails',component : CardetailsComponent },
  {path :'cardetail2',component : Cardetail2Component },
  {path :'cardetail3',component : Cardetail3Component },
  {path :'cardetail4',component : Cardetail4Component },
  {path :'cardetail5',component : Cardetail5Component },
  {path :'cardetail6',component : Cardetail6Component },
  {path :'cardetail7',component : Cardetail7Component },
  {path :'cardetail8',component : Cardetail8Component },
  {path :'cardetail9',component : Cardetail9Component },
  {path :'ekyc',component : EkycComponent },
  
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
