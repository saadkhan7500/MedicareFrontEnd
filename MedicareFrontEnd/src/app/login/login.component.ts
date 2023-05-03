import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Service2Service } from '../service2.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isSubmitted= false;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:DataService, private service2: Service2Service) { }



  ngOnInit(): void {
  }

  user={
    password:'',
    email:'',

  }


  //add record
  checkUser():void{
    const data={
      email:this.user.email,
      password:this.user.password,
    }

    if(!data.email){
      alert('please provide email');
      return;
    }

    if(!data.password){
      alert('please provide password');
      return;
    }
    //get user

    //this.service.getUserByEmail(this.user.email);
    // this.service.getUserByEmail(this.user.email)
    // .subscribe(data => {
    //   console.log(data.email+","+data.password+","+this.user.email+","+this.user.password); //You will get all your user related information in this field

    //   if((data.email==this.user.email)&&(data.password==this.user.password)){
    //     alert("Welcome !"+data.name);
    //   }
    //   else{
    //     alert("Wrong Email Id and Password");

    //   }
    // });

    this.signIn();


  }



  responseData: any = {
    name: "",
    email: "",
    password: "",
    country:""
  };





  getApiUrl(username: string) {
    console.log(username);
    const [, domain] = username.split('@');
    if (domain === 'admin.com') {
      return 'http://localhost:5555/api/admin/checkAdmin';
    } else {
      return 'http://localhost:5555/api/user/checkUser';
    }
  }



  signIn() {

    const apiUrl = this.getApiUrl(this.user.email);

    this.service.signIn(this.user, apiUrl).subscribe(
      response => {
        console.log(response);
        const [, domain] = this.responseData.email.split('@');

        if (domain == 'admin.com') {
          this.service2.saveState("admin");
          const user = JSON.stringify(response);

          sessionStorage.setItem('admin', user);
        }
        else {
          this.service2.saveState("user");
          const user = JSON.stringify(response);
          sessionStorage.setItem('user', user);
        }


      },
      error => {
        console.log(error);
      }
    )

  }


}

