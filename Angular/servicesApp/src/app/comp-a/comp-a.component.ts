import { Component, OnInit } from '@angular/core';
import { TestService } from '../service-a.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  numbers: number[] = [];
  onGenNum() {
    let num: number = (Math.floor(Math.random() * 10));
    this.numbers.push(num);
    this._dataService.addNumberA(num);
  }

  constructor(private _dataService: TestService) { }

  ngOnInit() {
  }

}
