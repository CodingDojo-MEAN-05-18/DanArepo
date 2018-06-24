import { Component, OnInit } from '@angular/core';
import { NinjaGoldService } from '../ninja-gold.service';

@Component({
  selector: 'app-gold-comp',
  templateUrl: './gold-comp.component.html',
  styleUrls: ['./gold-comp.component.css']
})
export class GoldCompComponent implements OnInit {
  myGold: number = this._dataService.goldCount;
  update() {
    this.myGold = this._dataService.retrieveGold();
    console.log('at Gold Comp: ', this._dataService.goldCount);
  }
  constructor(private _dataService: NinjaGoldService) { }

  ngOnInit() {
  }

}
