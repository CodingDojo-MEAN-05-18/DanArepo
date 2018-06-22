import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fighter = { powerLevel: 0 };
  fighters = [];
  onSubmit() {
    this.fighters.push(this.fighter);
    this.fighter = { powerLevel: 0 };
    console.log(this.fighters);
  }
}
