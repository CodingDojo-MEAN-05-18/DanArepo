import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote = { 
    id: 0,
    quote: '',
    author: '',
    votes: 0
    };
  quotes = [];
  onSubmit() {
    if(this.quote.quote && this.quote.author){
      let oldID = this.quote.id;
      this.quotes.push(this.quote);
      this.quote = { 
        id: oldID++,
        quote: '',
        author: '',
        votes: 0
      };
    } else if(!this.quote.quote) {
      alert('you need a quote');
    } else {
      alert('you need an author');
    }
    
  }
  invoke(eventData) {
    console.log('output received', eventData);
    console.log('ev0', eventData[0]);
    console.log('ev1', eventData[1]);
    switch (eventData[0]) {
      case 'upvote': {
        this.quotes[eventData[1]].votes++;
        break;
      }
      case 'downvote': {
        this.quotes[eventData[1]].votes--;
        break;
      }
      case 'delete': {
        this.quotes.splice(eventData[1], 1);
        break;
      }
    }
  }
}
