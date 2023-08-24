import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_ENDPOINT = environment.API_ENDPOINT;
const httpoption = {headers: new HttpHeaders({'Content-Type': 'application/json'})  };
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getAllcar():Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/car'),httpoption)
   }
   getCarByCarId(carId: any): Observable<any>{
  return this.http.get(API_ENDPOINT.concat('/car/'+carId),httpoption)
}
saveCar(data:any): Observable<any>{
  const body = JSON.stringify(data)
  return this.http.post(API_ENDPOINT.concat('/car/save'),body,httpoption)
}
deleteCarByCarId(carId:any): Observable<any>{
  return this.http.delete(API_ENDPOINT.concat('/car'+carId),httpoption)
}
updateCar(carId: any,data: any):Observable<any>{
  const body = JSON.stringify(data)
  return this.http.put<any>(API_ENDPOINT.concat('/car/update/'+carId),body,httpoption)
}
}
