import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RentcarService } from 'src/app/Service/rentcar.service';

@Component({
  selector: 'app-add-rentcar',
  templateUrl: './add-rentcar.component.html',
  styleUrls: ['./add-rentcar.component.css']
})
export class AddRentcarComponent implements OnInit{
  [x: string]: any;
  constructor(private formBuilder: FormBuilder,private router:Router,private activedRoute:ActivatedRoute,private rentcarservice:RentcarService){}
  formAdd = this.formBuilder.group({
 
    rentId:0,
    rentStart:'',
    rentInsurance:0,
    rentTotal:'',
    rentEnd:'',
    rentInterest:'',
    rentReceiveInPlace:'',
    rentReceiveOffsite:'',
    rentReturnInplace:'',
    rentReturnOffsite:'',
    carId:0,
    userId:0,
  })
  ngOnInit(): void {

  }
  Onsubmit(){
    const rentDto = this.formAdd.value;
    rentDto.rentId = 1
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
        this.rentcarservice.saveRent(rentDto).subscribe(res => {
          Swal.fire(
            'Sucess',
            'Your file has been Compelete.',
            'success'
          )
         //  window.location.reload()
         this.router.navigate(['admin/car'])
        });

      }
    })
  }
}


