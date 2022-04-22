import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Repo } from 'src/app/models/repo.model';
import { RepoService } from 'src/app/services/repo.service';


@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
})
export class RepoCardComponent implements OnInit {
  repos: Repo[] = [];
  repoError: any;

  constructor(
    private repoService: RepoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername(): void {
    const username = String(this.route.snapshot.paramMap.get('username'));
    this.repoService
      .getRepos(username)
      .then((repos) => {
        this.repos = repos;
      })
      .catch((error) => (this.repoError = error));
  }
}
