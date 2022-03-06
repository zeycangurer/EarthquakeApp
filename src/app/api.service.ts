import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url:string="https://deprem.odabas.xyz/api/pure_api.php";

  constructor(private http:HttpClient) {

   } 
   
   webService():Observable<any>{

      return this.http.get(this.url);
    }
}
