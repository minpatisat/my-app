import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_ENDPOINT = environment.API_ENDPOINT;
const httpoption = {headers: new HttpHeaders({'Content-Type': 'application/json'})  };
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(API_ENDPOINT.concat('/user'),httpoption)
  }
  getById(userId: any):Observable<any>{
    return this.http.get(API_ENDPOINT.concat('/user/'+userId),httpoption)
  }
  saveCustmers(data: any):Observable<any>{
    const body = JSON.stringify(data)
    return this.http.post<any>(API_ENDPOINT.concat('/user/save'),body,httpoption)
  }
  deleteById(userId: any):Observable<any>{
    return this.http.delete(API_ENDPOINT.concat('/user/'+userId),httpoption)
  }
  updateUser(userId: any,data: any):Observable<any>{
    const body = JSON.stringify(data)
    return this.http.put<any>(API_ENDPOINT.concat('/user/update/'+userId),body,httpoption)
  }
}
