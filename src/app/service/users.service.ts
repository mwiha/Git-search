import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private username:string;
  private clientid = "c356ecdee180dd53ef95";
  private clientsecret = "acf10bc9294ccdc784414d7fb57f2fcdfb92f4ff";

  constructor(private http:HttpClient) {
    console.log ("service is now ready!");
    this .username ='mwiha';

   }
  
  
  getprofileInfo(){
    return this.http.get("http:api.github.com/users/"+ this.username +"?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
  }


  getprofileRepose(){
    return this.http.get("http:api.github.com/users/"+ this.username +"/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));

  }
}
