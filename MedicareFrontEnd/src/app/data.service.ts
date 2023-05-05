import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="http://localhost:5555/api/user/";

  //inject the DI
  constructor(private http:HttpClient) { }

  //get all users
  getAllUser():Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url+"allUsers");
  }
 
  //get user by id
  getUserById(id:number):Observable<UserClass>{
    return this.http.get<UserClass>(this.url+"getUser/"+id);
  }
  //get user by email
  getUserByEmail(email:string):Observable<UserClass>{
    return this.http.get<UserClass>(this.url+email);
  }
  //create record
  create(data:any ):Observable<any>{
    return this.http.post(this.url+"addUser",data).pipe();
  }
  //deleteById
  deleteById(id:number){
    let myid=id;
    this.http.delete(this.url+myid).subscribe(data=>{
      return this.getAllUser();
    });
  }

  //update user
  updateUser(cust:UserClass,id:number){
    return this.http.put(this.url+"updateUser/"+id,cust);
  }

  //get user by email and password
  signIn(data:any,apiUrl:any)
  {
    return this.http.post<any>(apiUrl,data)
  }
}
