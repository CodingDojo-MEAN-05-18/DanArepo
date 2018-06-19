import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  user = { name: '' };
  users = [];
  onSubmit() {
    this.users.push(this.user);
    this.user = {name: '' };
    console.log(this.users);
  }
  constructor() { }

  ngOnInit() {
  }

}
