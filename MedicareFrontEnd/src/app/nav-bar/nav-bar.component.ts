import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../service2.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

  user:any;
  showResetForm=false;

  searchProduct:any;
  searchResult:any;

  constructor(public service2: Service2Service){


  }

  signOut()
  {
    sessionStorage.removeItem('user');
    this.service2.saveState("main");
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("user");
    this.user=JSON.parse(this.user);

  }

}
