import { Component, OnInit } from '@angular/core';
import { NinjaGoldService } from '../ninja-gold.service';

@Component({
  selector: 'app-log-comp',
  templateUrl: './log-comp.component.html',
  styleUrls: ['./log-comp.component.css']
})
export class LogCompComponent implements OnInit {
  msgLog: string[] = this._dataService.msgLog;
  constructor(private _dataService: NinjaGoldService) { }

  ngOnInit() {
  }

}
