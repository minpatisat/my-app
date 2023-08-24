import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { RentcarComponent } from '../../home/rentcar/rentcar.component';
import { RentcarService } from 'src/app/Service/rentcar.service';

@Component({
  selector: 'app-rentcar-admin',
  templateUrl: './rentcar-admin.component.html',
  styleUrls: ['./rentcar-admin.component.css']
})
export class RentcarAdminComponent implements OnInit{ 
  constructor(private router:Router,private rentcarservice:RentcarService){}
  ListRentcarAdmin: any
  ngOnInit(): void {
    this.rentcarservice.getAllRent().subscribe(res =>{
      console.log('res =>',res)
      if(res){this.ListRentcarAdmin = res}
      console.log(res)
    })
  }
  ondelete(item : any){
    Swal.fire({
      title: 'ต้องการลบข้อมูล?',
      text: "คุณต้องการลบข้อมูลใช่หรือไม่!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rentcarservice.deleteRentByrentId( Number (item.rentId)).subscribe(res => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.ngOnInit()
        });
      }
    })
  }
  OngetId(item : any){
    this.router.navigate([ 'admin/edit/'+item.rentId ])
  }
}


