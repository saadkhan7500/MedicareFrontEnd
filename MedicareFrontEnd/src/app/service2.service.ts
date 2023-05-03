import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  key = 'navFlag';
  searchResponse:any;
  searchResponseCon:boolean=false;
constructor()
{

}
saveState(state: any) {
 console.log("Set state calling",state);
 localStorage.setItem(this.key,state);
}

getState(): any {
 const state = localStorage.getItem(this.key);
 return state ? state : "main";
}
}
