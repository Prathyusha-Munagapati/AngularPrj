import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {FakeService} from '../fake.service'
import { MatTableDataSource } from '@angular/material/table';
export interface user {
  position:number;
  username: string;
  email:string;
  password: string;
  action1: string;
  action2:string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any;
  name1:any;
  name:any;
  username:any;
  email:any;
  val:any;
  dataSource = new MatTableDataSource<any>(); 
  public USER_DATA: user[] = [];
  UserInfo: any;
  constructor(private msg :FakeService,
    private router :Router,
    private route:ActivatedRoute) {}
    ngOnInit(): void {
      this.USER_DATA = this.msg.getInfo();
      this.dataSource.data = this.USER_DATA;
      console.log(this.dataSource)
    }
    displayedColumns = ['position', 'username', 'email','password', 'action1', 'action2'];
    removeItem(val:any)
    {
      if (val > -1) {
        this.USER_DATA.splice(val, 1);
        this.ngOnInit();
      }     
 
    }
    viewData(val:any)
    {
      this.USER_DATA.forEach((value:any, index:any)=>
      {
        if(value == val)
        {
          this.UserInfo = val
          this.router.navigate(['./user'],
          {
            queryParams:{data:JSON.stringify(this.val)}
          }
          )
        }
      })
  
    }

    }




  