import { Component, OnInit } from '@angular/core';
import { MedicineClass } from '../MedicineClass';
import { PurchasedService } from '../purchased.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {

  medicines:any;
  user:any;
  
  constructor(private purchase:PurchasedService) { }

  ngOnInit(): void {
    let userTemp = sessionStorage.getItem('user') as string;
    this.user = JSON.parse(userTemp);
    console.log(this.user);
   
    this.purchase.getPurchasedProduct(this.user.email).subscribe(result1=>this.medicines=result1);
  }

}
