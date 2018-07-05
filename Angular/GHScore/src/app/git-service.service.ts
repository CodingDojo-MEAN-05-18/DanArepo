import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  user: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private HTTP: HttpClient) {
  }

  retrieveData(data) {
    this.HTTP.get('https://api.github.com/users/' + data).subscribe((user: any) => {
      this.user.next(user);
    });
  }
}
