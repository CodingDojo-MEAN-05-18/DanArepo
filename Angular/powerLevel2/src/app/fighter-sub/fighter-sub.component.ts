import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fighter-sub',
  templateUrl: './fighter-sub.component.html',
  styleUrls: ['./fighter-sub.component.css']
})
export class FighterSubComponent implements OnInit {
  @Input() pwrLvl;
  @Input() fighter;
  @Input() msg;
  constructor() { }

  ngOnInit() {
  }

}
