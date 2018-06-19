import { Component, OnInit } from '@angular/core';

import { RegUser } from '../reg-user';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  states = ['WA', 'NJ' ];

  model = new RegUser();
  models = [];

  onSubmit() {
    console.log(this.model);
    console.log(this.model.password + ' - ' + this.model.passwordConfirm);
    if (this.model.password === this.model.passwordConfirm) {
      this.models.push(this.model);
      this.model = new RegUser();
    } else {
      alert('Passwords do not match');
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
