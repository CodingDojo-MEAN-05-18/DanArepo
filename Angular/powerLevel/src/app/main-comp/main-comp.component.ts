import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  @Input() inputPL;
  constructor() { }

  ngOnInit() {
  }

}
