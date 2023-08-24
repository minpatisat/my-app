import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private formbulider:FormBuilder,private router:Router,private activedroute:ActivatedRoute,private userservice:UserService){}
  userId:any
  formAdd = this.formbulider.group({
    
    userId:0,
    userName:'',
    userPassword:'',
    userTitle:'',
    userFirstname:'',
    userLastname:'',
    userCardId:'',
    userPhone:'',
    userEmail:'',
    userAddrss:'',
    roleId:0,
  })

  ngOnInit(): void {
    this.userId = this.activedroute.snapshot.paramMap.get("userId");
    this.dataforedit(this.userId)
  }
  dataforedit(userId:any){
    this.userservice.getById(userId).subscribe((res)=>{
      if(res){
        this.formAdd.patchValue({
          

          userId: res.userId,
          userName:res.userName,
          userPassword:res.userPassword,
          userTitle:res.userTitle,
          userFirstname:res.userFirstname,
          userLastname:res.userLastname,
          userCardId:res.userCardId,
          userPhone:res.userPhone,
          userEmail:res.userEmail,
          userAddrss:res.userAddrss,
          roleId:res.roleId,
          
        })
      }
    })
  }
  Onsubmit(){
    const UserDto = this.formAdd.value;
    UserDto.roleId = 1
    Swal.fire({
      title: 'ต้องการเพิ่มผู้ใช้งาน?',
      text: "คุณต้องการเพิ่มผู้ใช้งานใช่หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#56C596' ,
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก' 
    }).then((result) => {
      if (result.isConfirmed) {
        this.userservice.updateUser(UserDto.userId,UserDto).subscribe(res => {
          Swal.fire(
            'Sucess',
            'Your file has been Compelete.',
            'success'
          )
         //  window.location.reload()
         this.router.navigate(['admin'])
        });

      }
    })
  }
}
