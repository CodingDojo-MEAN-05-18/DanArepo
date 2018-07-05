import { Component, OnInit } from '@angular/core';
import { NinjaGoldService } from '../ninja-gold.service';

@Component({
  selector: 'app-log-comp',
  templateUrl: './log-comp.component.html',
  styleUrls: ['./log-comp.component.css']
})
export class LogCompComponent implements OnInit {
  msgLog: string[] = []];
  getLog():void {
    this._dataService.getLog()
      .subscribe(msgLog => this.msgLog = msgLog);
  }
  constructor(private _dataService: NinjaGoldService) { }

  ngOnInit() {
    this.getLog();
  }

}
