import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkycComponent } from './module/home/ekyc/ekyc.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../app/module/home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('../app/module/admin/admin.module').then(m => m.AdminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
