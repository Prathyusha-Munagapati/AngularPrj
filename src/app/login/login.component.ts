import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl  } from '@angular/forms';
//import { Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';
import {FakeService} from '../fake.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form :any;
name:any;
UserList:Array<{username : "", email :"" }> = [];
  constructor(private service :FakeService) { 
    this.form = new FormGroup(
      {
        username:new FormControl("",Validators.required),
        email:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required)
      }
    )
  }

  ngOnInit(): void {

  }
  add()
  {
    this.service.sendInfo(this.form.value)
  }
}