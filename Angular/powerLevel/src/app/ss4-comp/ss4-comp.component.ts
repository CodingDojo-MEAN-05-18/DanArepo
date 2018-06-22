import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ss4-comp',
  templateUrl: './ss4-comp.component.html',
  styleUrls: ['./ss4-comp.component.css']
})
export class Ss4CompComponent implements OnInit {
  @Input() inputPL;
  constructor() { }

  ngOnInit() {
  }

}
