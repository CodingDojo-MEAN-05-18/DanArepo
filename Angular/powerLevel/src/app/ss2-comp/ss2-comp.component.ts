import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ss2-comp',
  templateUrl: './ss2-comp.component.html',
  styleUrls: ['./ss2-comp.component.css']
})
export class Ss2CompComponent implements OnInit {
  @Input() inputPL;
  constructor() { }

  ngOnInit() {
  }

}
