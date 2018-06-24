import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {
  @Input() quote;
  @Input() author;
  @Input() votes;
  @Input() id;
  @Output() outEvent = new EventEmitter();

  upVote() {
    this.outEvent.emit(['upvote', this.id]);
  }
  downVote() {
    this.outEvent.emit(['downvote', this.id]);
  }
  delete() {
    this.outEvent.emit(['delete', this.id]);
  }
  constructor() { }

  ngOnInit() {
  }

}
