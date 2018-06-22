import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-main',
  templateUrl: './power-main.component.html',
  styleUrls: ['./power-main.component.css']
})
export class PowerMainComponent implements OnInit {
  fighter = { 
    class:'Human', 
    powerLevel: 0,
    pwrMsg:'Meh...'
    };
  fighters = [];
  onSubmit() {
    this.fighters = [];
    let n = 0;
    let powerMessage = '';
    let pwrLvl = this.fighter.powerLevel;
    do{
      switch(n){
        case 0: {
          this.fighter.class = 'Human';
          this.fighter.powerLevel = pwrLvl;
          break;
        }
        case 1: {
          this.fighter.class = 'Saiyan';
          this.fighter.powerLevel = pwrLvl * 10;
          break;
        }
        case 2: {
          this.fighter.class = 'SuperSaiyan';
          this.fighter.powerLevel = pwrLvl * 90;
          break;
        }
        case 3: {
          this.fighter.class = 'SSJ2';
          this.fighter.powerLevel = pwrLvl * 150;
          break;
        }
        case 4: {
          this.fighter.class = 'SSJ3';
          this.fighter.powerLevel = pwrLvl * 250;
          break;
        }
        case 5: {
          this.fighter.class = 'SSJ4';
          this.fighter.powerLevel = pwrLvl * 500;
          break;
        }
      }
      if(this.fighter.powerLevel >= 9000 && this.fighter.powerLevel < 20000) {
        this.fighter.pwrMsg = 'Over 9000!';
      } else if (this.fighter.powerLevel >= 20000 && this.fighter.powerLevel < 50000) {
        this.fighter.pwrMsg = 'Superlative!';
      } else if (this.fighter.powerLevel >= 50000 ) {
        this.fighter.pwrMsg = 'The One!';
      } else {
        this.fighter.pwrMsg = 'Meh...';
      }
      this.fighters.push(this.fighter);
      this.fighter = {
        class:'Human', 
        powerLevel: 0,
        pwrMsg:'Meh...'
      }
      n++;
    } while (n < 6 );
  }
  constructor() { }

  ngOnInit() {
  }

}