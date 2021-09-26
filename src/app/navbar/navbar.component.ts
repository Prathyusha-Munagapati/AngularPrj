import { Component, OnInit } from '@angular/core';
import {FakeService} from '../fake.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name:any;
  constructor(public message : FakeService) {

   }

  ngOnInit(): void {
    
  }

}
