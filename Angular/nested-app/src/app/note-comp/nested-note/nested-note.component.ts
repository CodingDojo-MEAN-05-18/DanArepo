import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nested-note',
  templateUrl: './nested-note.component.html',
  styleUrls: ['./nested-note.component.css']
})
export class NestedNoteComponent implements OnInit {
  @Input() inputNote;
  @Output() outEvent = new EventEmitter();
  callParent() {
    this.outEvent.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
