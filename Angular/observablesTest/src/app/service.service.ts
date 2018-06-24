import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor() { }
  updateData(newData: any):void {
    const tempData = this.data.getValue();
    tempData.push(newData);
    this.data.next(tempData);
  }
}
