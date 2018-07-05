import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 

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
  retrieveGold(): Observable<number> {
    console.log('at service: ', this.goldCount);
    return of(this.goldCount);
  }
  getLog(): Observable<string[]> {
    return of(this.msgLog);
  }
  constructor() { }
}
