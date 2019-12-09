import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

  @Injectable()
export class ServicesComponent implements OnInit { 

        private username :string;
        private clientid='c356ecdee180dd53ef95';
        private clientsecret='acf10bc9294ccdc784414d7fb57f2fcdfb92f4ff';


  constructor(private http: Http) { 
    console.log ("service is now ready!");
    this .username ='mwiha';
  }

  getprofileInfo(){
    return this.http.get("http:api.github.com/users/"+ this.username +"?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }


  getprofileRepose(){
    return this.http.get("http:api.github.com/users/"+ this.username +"/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());

  }

  ngOnInit() {
  }

}
