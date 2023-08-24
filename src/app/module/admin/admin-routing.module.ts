// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustmerComponent } from './add-custmer/add-custmer.component';
import { AdminComponent } from './admin.component';
import { EditComponent } from './edit/edit.component';
import { AddCarComponent } from './add-car/add-car.component';
import { MenuComponent } from './menu/menu.component';
import { CarsComponent } from './cars/cars.component';
import { RentcarAdminComponent } from './rentcar-admin/rentcar-admin.component';


const routes: Routes = [
  {path:'',component:MenuComponent},
  {path: 'Add-custmer',component:AddCustmerComponent},
  {path: 'edit/:userId',component:EditComponent},
  {path: 'add-car',component:AddCarComponent},
  {path: 'main',component:AdminComponent},
  {path: 'cars',component:CarsComponent},
  {path: 'rentcar-admin',component:RentcarAdminComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }