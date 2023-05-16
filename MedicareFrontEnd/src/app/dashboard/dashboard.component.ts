import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { MedicineClass } from '../MedicineClass';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Service2Service } from '../service2.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  medicines:MedicineClass[];
  medicine:any;
  flag:boolean=true;
  user: any;
  showSingIn: boolean = false;
  showSignUp: boolean = false;
  isSubmitted= false;
  
  constructor(private service:FileUploadService,private router: Router,private dataService:DataService, private service2: Service2Service) { }

  ngOnInit(): void {

    let userTemp = sessionStorage.getItem('user') as string;
    this.user = JSON.parse(userTemp);
    console.log(this.user);

    this.service.getAllMedicine().subscribe(result1=>this.medicines=result1);
  }


  breakdown(medicine: any) {
    this.flag = false;
    console.log(medicine);
    this.medicine = medicine;
    window.scroll(0, 0);
  }

  breakdownOff() {
    this.flag = true;
  }
  order() {
    if (this.user != null) {
      const medicine = JSON.stringify(this.medicine);
      sessionStorage.setItem("medicine", medicine);
      this.router.navigate(
        ['/order'],
      );
    }
    else {
      console.log("inside else condition");
      this.showSingIn = true;
    }
  }


   //sign in method starts here
  data = {
    email: "",
    password: "",
  }
  signIn() {

    const apiUrl = "http://localhost:5555/api/user/checkUser"

    this.dataService.signIn(this.data, apiUrl).subscribe(
      response => {
        const user = JSON.stringify(response);
        sessionStorage.setItem("user", user);
        this.router.navigate(
          ['/order'],
        );
      },
      error => {
        console.log(error);
      }
    );

  }
  // signIn method ends here


  // signUp method starts here
  userData={
    name:'',
    country:'',
    password:'',
    email:'',
  }

  addUser()
  {
    console.log(this.userData)
    this.dataService.create(this.userData).subscribe(
      response=>
      {
        console.log(response);
        const user = JSON.stringify(response);
        console.log(user);
        sessionStorage.setItem('user', user);
        this.router.navigate(
          ['/order'],
        );
      },
      error=>
      {
        console.log(error);
      }
    )
  }
  // signUp method ends here


 
}
