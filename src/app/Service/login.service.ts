import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_ENDPOINT = environment.API_ENDPOINT;
const httpoption = {headers: new HttpHeaders({'Content-Type': 'application/json'})  };
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login( userName: any,userPassWord: any):Observable<Object> {
    return this.http.post(API_ENDPOINT.concat('/login/'+ userName+'/'+userPassWord),httpoption)
   }
}
