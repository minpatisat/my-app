import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/Service/car/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  [x: string]: any;
  constructor(private formBuilder: FormBuilder,private router:Router,private activedRoute:ActivatedRoute,private carservice:CarService){}
  formAdd = this.formBuilder.group({
 
    carId:0,
    carName:'',
    carBrand:'',
    carPrice:0,
    carImg:'',
    carStetus:'',
    carDetail:'',
   
   
  })
  ngOnInit(): void {

  }
  Onsubmit(){
    const carDto = this.formAdd.value;
    carDto.carId = 1
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
        this.carservice.saveCar(carDto).subscribe(res => {
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
