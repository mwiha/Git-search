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


  constructor(private http: Http) { }

  ngOnInit() {
  }

}
