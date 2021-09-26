import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SinupCompComponent implements OnInit {
  fname:string="";
  uname:string="";
  phn:any;
  email:any;
  pwd:any;
  Details=Array();

  constructor() { }

  ngOnInit(): void {
  }
  getData()
  {
    this.Details.push(this.fname, this.uname, this.phn, this.email, this.pwd);
  }

}
