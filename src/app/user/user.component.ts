import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  val:any;
  data:any;
  username:any;
  constructor(
    private router :Router,
    private route:ActivatedRoute) {}


  ngOnInit() {
    this.route.queryParams.subscribe(params=>
      {
        this.data = JSON.parse(params.data);
        console.log("InUser", this.data)
        console.log(this.data.values)
      })

  }

}
