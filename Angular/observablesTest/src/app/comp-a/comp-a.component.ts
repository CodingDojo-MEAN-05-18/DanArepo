import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  data: any[] = [];
  constructor(private _dataService: ServiceService) { }

  ngOnInit() {
    this._dataService.data.subscribe(
      (data) => { this.data = data; }
    );
  }

}
