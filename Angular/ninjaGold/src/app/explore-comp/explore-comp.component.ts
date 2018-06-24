import { Component, OnInit } from '@angular/core';
import { NinjaGoldService } from '../ninja-gold.service';

@Component({
  selector: 'app-explore-comp',
  templateUrl: './explore-comp.component.html',
  styleUrls: ['./explore-comp.component.css']
})
export class ExploreCompComponent implements OnInit {
  farm() {
    let gold: number = Math.floor(Math.random() * (5 - 2) + 2);
    this._dataService.exploreClick(gold, 'Farm');
  }
  cave() {
    let gold: number = Math.floor(Math.random() * (10 - 5) + 5);
    this._dataService.exploreClick(gold, 'Cave');
  }
  casino() {
    let gold: number = Math.floor(Math.random() * (200) - 100);
    this._dataService.exploreClick(gold, 'Casino');
  }
  house() {
    let gold: number = Math.floor(Math.random() * (15 - 7) + 7);
    this._dataService.exploreClick(gold, 'House');
  }
  constructor(private _dataService: NinjaGoldService) { }

  ngOnInit() {
  }

}
