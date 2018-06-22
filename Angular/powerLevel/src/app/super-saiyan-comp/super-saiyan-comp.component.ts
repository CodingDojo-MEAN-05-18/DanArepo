import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-comp',
  templateUrl: './super-saiyan-comp.component.html',
  styleUrls: ['./super-saiyan-comp.component.css']
})
export class SuperSaiyanCompComponent implements OnInit {
  @Input() inputPL;

  constructor() { }

  ngOnInit() {
  }

}
