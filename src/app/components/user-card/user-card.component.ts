import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
// import { RequestLimitService } from 'src/app/services/request-limit.service';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  user!: User;

  constructor(
    private ProfileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this.ProfileService.user.subscribe((profile) => {
      this.user = profile;

    });
  }

  // getUsers(users: any): void {
  //   this.users = event;
  // }
}
