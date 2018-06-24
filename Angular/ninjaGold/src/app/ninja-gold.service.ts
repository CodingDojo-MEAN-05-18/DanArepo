import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaGoldService {
  goldCount: number = 0;
  msg: string = '';
  msgLog: string[] = [];

  exploreClick(num: number, place: string) {
    this.msg = "You've"
    if(num > 0){
      this.msg += " earned ";
    } else {
      this.msg += " lost ";
    }
    this.goldCount += num;
    this.msg += num + " gold at the " + place + "!";
    this.msgLog.push(this.msg);
  }
  retrieveGold(): number {
    console.log('at service: ',this.goldCount);
    return this.goldCount;
  }
  constructor() { }
}
