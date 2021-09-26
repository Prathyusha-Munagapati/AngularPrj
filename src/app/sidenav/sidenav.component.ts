import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service'; 

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  val:any;
  data:any;
  username:any;
  constructor(private msg : FakeService) { }

  ngOnInit(): void {
    

      }
    
    
  }



