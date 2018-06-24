import { Component, OnInit } from '@angular/core';
import { TestService } from '../service-a.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  numbers: number[] = [];
  onGenNum() {
    let num: number = (Math.floor(Math.random() * 10));
    this.numbers.push(num);
    this._dataService.addNumberB(num);
  }
  constructor(private _dataService: TestService) { }

  ngOnInit() {
  }

}
