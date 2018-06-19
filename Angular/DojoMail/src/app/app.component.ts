import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [ billMail, adaMail, johnMail, gabeMail ];
  colorBar = [ randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex(), randHex() ];
  date = new Date().toString();
  btnBar = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  stateTxt = [ 'On', 'On', 'On', 'On', 'On', 'On', 'On', 'On', 'On', 'On' ];
  colorState = [ 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green' ];
  onButtonClick(data) {
    console.log('button was clicked: ', data);
    switch (data) {
      case 'pst': {
        console.log('PST was clicked');
        this.date = new Date().toString();
        break;
      }
      case 'mst': {
        console.log('MST was clicked');
        const time = new Date();
        const curHour = time.getHours() + 1;
        time.setHours(curHour);
        console.log(time);
        this.date = time.toString();
        break;
      }
      case 'cst': {
        console.log('CST was clicked');
        const time = new Date();
        const curHour = time.getHours() + 2;
        time.setHours(curHour);
        console.log(time);
        this.date = time.toString();
        break;
      }
      case 'est': {
        console.log('EST was clicked');
        const time = new Date();
        const curHour = time.getHours() + 3;
        time.setHours(curHour);
        console.log(time);
        this.date = time.toString();
        break;
      }
      case 'clear': {
        console.log('CLEAR was clicked');
        this.date = new Date().toString();
        break;
      }
    }
  }
  btnOnOff(data) {
    console.log(data);
    switch (this.stateTxt[data]) {
      case ('On'): {
        this.colorState[data] = 'red';
        this.stateTxt[data] = 'Off';
        break;
      }
      case ('Off'): {
        this.colorState[data] = 'green';
        this.stateTxt[data] = 'On';
        break;
      }
    }
  }
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


