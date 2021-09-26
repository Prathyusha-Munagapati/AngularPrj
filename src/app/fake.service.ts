import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FakeService {
val:any=[];

  sendInfo(message:any)
  {
    this.val.push(message)
    console.log(this.val)
  }

  getInfo()
  {
    return this.val
  }
  constructor() { }
}
