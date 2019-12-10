import { Component, OnInit } from '@angular/core';
import {UsersService} from '../service/users.service'
import {User} from "../user"
import {Repos} from "../repos"
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
      profile;
      repos;
      username:string;

  constructor(private userService :UsersService) {
  }


  findUser() {
     this.userService.updateUser(this.username);
    this.userService.getprofileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.userService.getprofileRepose().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }




  ngOnInit() {}

}
