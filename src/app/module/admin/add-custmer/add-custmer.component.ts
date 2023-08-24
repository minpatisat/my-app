import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, } from 'src/app/Service/user.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-custmer',
  templateUrl: './add-custmer.component.html',
  styleUrls: ['./add-custmer.component.css']
})
export class AddCustmerComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router:Router,private activedRoute:ActivatedRoute,private userservice:UserService){}
  formAdd = this.formBuilder.group({
 
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
    roleId: 0
  })
  ngOnInit(): void {

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
        this.userservice.saveCustmers(UserDto).subscribe(res => {
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
