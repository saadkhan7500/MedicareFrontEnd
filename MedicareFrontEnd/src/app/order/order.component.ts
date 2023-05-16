import { Component, OnInit } from '@angular/core';
import { PurchasedService } from '../purchased.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  flag:boolean = false;
  medicine:any;
  user:any;
  purchased:any={
    productId:0,
    userEmail:"",
  }

  showWelcomeContent:boolean=false;

   constructor(private purchase:PurchasedService)
  {

  }


  ngOnInit(): void {

    //getting medicine from session
    let medicineTemp = sessionStorage.getItem("medicine") as string;
    this.medicine=JSON.parse(medicineTemp);


    //getting user from session
    let userTemp = sessionStorage.getItem("user") as string;
    this.user = JSON.parse(userTemp);


    //creating purchased JSON  to store in Purchased Table
    this.purchased = {
      productId: this.medicine.id,
      userEmail: this.user.email,
    };

  }

  placeOrder()
  {
    this.flag = true;
    console.log(this.purchased);
    this.purchase.addPurchased(this.purchased).subscribe(response=>
      {
        this.flag = false;
         console.log(response);
         this.showWelcomeContent=true;

      },
      error=>{
      }
      );

  }

}
