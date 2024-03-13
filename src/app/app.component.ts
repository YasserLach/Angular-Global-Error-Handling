import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { EMPTY } from 'rxjs';
import { User } from './core/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'error-handling';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getOneRessource('19').subscribe({
      next: (data) => console.log(data),
    });
  }
}
