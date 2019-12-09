import { Component, OnInit } from '@angular/core';
import{ProfileComponent}from '../profile';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
      profile:any[];
      repos:any[];

  constructor(private profile :service) {
    this.profile.getprofileInfo().subscribe(profile =>{
      console.log(profile);
    this.profile =profile;
    });

    this.profileservice.g
   }

  ngOnInit() {
  }

}
