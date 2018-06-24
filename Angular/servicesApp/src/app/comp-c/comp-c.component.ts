import { Component, OnInit } from '@angular/core';

import { TestService } from '../service-a.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  difference: number = 0;
  onGenDiff() {
    this.difference = this._dataService.findDifference(this._dataService.numbersA, this._dataService.numbersB);
  }
  constructor(private _dataService: TestService) { }

  ngOnInit() {
  }

}
