import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private username:string;
  private clientid = "0bd6d926c3744594f8b9";
  private clientsecret = "c798b55be805550fb7ce6f7c71863dc9001055f3";

  constructor(private http:HttpClient) {
    console.log ("service is now ready!");
    this .username ='mwiha';

   }

  
  getprofileInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username +"?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
  }


  getprofileRepose(){
    return this.http.get("https://api.github.com/users/"+ this.username +"/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));

  }

  updateUser(username:string){
    this.username = username;
  }
}
