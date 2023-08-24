import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService,  } from 'src/app/Service/user.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{ 
  constructor(private router:Router,private userservice:UserService){}
  ListUser: any
  ngOnInit(): void {
    this.userservice.getAll().subscribe(res =>{
      console.log('res =>',res)
      if(res){this.ListUser = res}
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
        this.userservice.deleteById( Number (item.userId)).subscribe(res => {
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
    this.router.navigate([ 'admin/edit/'+item.userId ])
  }
}