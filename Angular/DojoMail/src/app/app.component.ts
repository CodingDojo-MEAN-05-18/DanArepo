import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [ billMail, adaMail, johnMail, gabeMail ];
  colorBar = [ randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex() ];
}

class Email {
  email: string;
  importance: boolean;
  subject: string;
  content: string;
  constructor(emailC: string, importanceC: boolean, subjectC: string, contentC: string) {
    this.email = emailC;
    this.importance = importanceC;
    this.subject = subjectC;
    this.content = contentC;
  }
}
const billMail = new Email('bill@gates.com', true, 'something important', 'haha');
const adaMail = new Email('ada@lovelace.com', true, 'something important', 'haha');
const johnMail = new Email('john@carmac.com', false, 'something not important', 'haha');
const gabeMail = new Email('gabe@newel.com', false, 'some other thing that\'s also not important', 'haha');

function randHex(): string {
  let str = '#';
  let n = 0;
  do {
    let pos = '';
    pos = Math.floor(Math.random() * 16).toString();
    switch (pos) {
      case '10': {
        pos = 'a';
        break;
      }
      case '11': {
        pos = 'b';
        break;
      }
      case '12': {
        pos = 'c';
        break;
      }
      case '13': {
        pos = 'd';
        break;
      }
      case '14': {
        pos = 'e';
        break;
      }
      case '15': {
        pos = 'f';
        break;
      }
    }
    str += pos;
    n++;
  }while ( n < 6 );
  return str;
}
