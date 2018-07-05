import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  user = {
    username: '',
    score: 0,
    message: '',
  }
  constructor(private gitSearch: GitService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.user.username);
    console.log(this.gitSearch.retrieveData(this.user.username));
  }

}
