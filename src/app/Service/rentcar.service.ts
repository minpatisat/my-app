import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_ENDPOINT = environment.API_ENDPOINT;
const httpoption = {headers: new HttpHeaders({'Content-Type': 'application/json'})  };
@Injectable({
  providedIn: 'root'
})
export class RentcarService {

  constructor(private http:HttpClient) { }

  getAllRent():Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/rent'),httpoption)
   }
   getRentByRentId(rentId: any): Observable<any>{
  return this.http.get(API_ENDPOINT.concat('/rent/'+rentId),httpoption)
}
saveRent(data:any): Observable<any>{
  const body = JSON.stringify(data)
  return this.http.post(API_ENDPOINT.concat('/rent/save'),body,httpoption)
}
deleteRentByrentId(rentId:any): Observable<any>{
  return this.http.delete(API_ENDPOINT.concat('/rent'+rentId),httpoption)
}
updateRent(rentId: any,data: any):Observable<any>{
  const body = JSON.stringify(data)
  return this.http.put<any>(API_ENDPOINT.concat('/rent/update/'+rentId),body,httpoption)
}
}