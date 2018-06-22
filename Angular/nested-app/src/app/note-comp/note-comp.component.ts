import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-comp',
  templateUrl: './note-comp.component.html',
  styleUrls: ['./note-comp.component.css']
})
export class NoteCompComponent implements OnInit {
  notes = [ { title: 'title1' }, { title: 'title2' } ];

  invoke() {
    console.log('output check');
  }
  constructor() { }

  ngOnInit() {
  }

}
