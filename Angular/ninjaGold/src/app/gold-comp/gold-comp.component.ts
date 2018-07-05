import { Component, OnInit } from '@angular/core';
import { NinjaGoldService } from '../ninja-gold.service';

@Component({
  selector: 'app-gold-comp',
  templateUrl: './gold-comp.component.html',
  styleUrls: ['./gold-comp.component.css']
})
export class GoldCompComponent implements OnInit {
  constructor(private _dataService: NinjaGoldService) { }

  ngOnInit() {
  }

}
