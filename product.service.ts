import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  public getAllProduct():Observable<any>
  {
    return this.http.get("http://localhost:7070/TripKitRESTAPI/products");
  }

}
