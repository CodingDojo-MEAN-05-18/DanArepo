import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ss3-comp',
  templateUrl: './ss3-comp.component.html',
  styleUrls: ['./ss3-comp.component.css']
})
export class Ss3CompComponent implements OnInit {
  @Input() inputPL;
  constructor() { }

  ngOnInit() {
  }

}
