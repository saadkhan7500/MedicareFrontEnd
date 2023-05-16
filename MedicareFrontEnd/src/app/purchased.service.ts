import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicineClass } from './MedicineClass';

@Injectable({
  providedIn: 'root'
})
export class PurchasedService {
  

  private baseUrl = 'http://localhost:5555/api/purchased/';

  constructor(private http:HttpClient) { }

  addPurchased(purchased: any) {
    return this.http.post<any>(`${this.baseUrl}addPurchased`,purchased);
  }

  getPurchasedProduct(email:any) {
    return this.http.get<MedicineClass>(`${this.baseUrl}myOrder/`+email);
  }
}
