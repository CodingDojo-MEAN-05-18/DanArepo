import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan-comp',
  templateUrl: './saiyan-comp.component.html',
  styleUrls: ['./saiyan-comp.component.css']
})
export class SaiyanCompComponent implements OnInit {
  @Input() inputPL;
  constructor() { }

  ngOnInit() {
  }

}
