import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/Service/car/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{ 
  constructor(private router:Router,private carservice:CarService){}
  ListCars: any
  ngOnInit(): void {
    this.carservice.getAllcar().subscribe(res =>{
      console.log('res =>',res)
      if(res){this.ListCars = res}
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
        this.carservice.deleteCarByCarId( Number (item.carId)).subscribe(res => {
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
    this.router.navigate([ 'admin/edit/'+item.carId ])
  }
}