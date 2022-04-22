import { Component, OnInit } from '@angular/core';
// import { ProfileService} from 'src/app/services/profile.service'
// import { Router } from '@angular/router';

@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.css'],
})
export class FollowerCardComponent implements OnInit {
  user: any;
  followers!: any;
  constructor(
    // private router: Router,
    // private profileService:ProfileService,
  ) {}

  ngOnInit(): void {
  //  this.profileService.user.subscribe((user) => getFollowers(user.login));
   }

  // getFollowers(username: string): void {
  //   this.followerService
  //     .getFollowers(username)
  //     .then((followers) => {
  //       this.followers = followers;
  //       this.requestLimitService.getRequestLimit().subscribe()

  //     })
  //     .catch((error) => {
  //       console.log('Followers search error: ', error);
  //     });
  // }
}
