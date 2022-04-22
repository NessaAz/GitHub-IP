import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

import { Repo } from 'src/app/models/repo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  repos!: Repo[];
  gitHubApi: string= "https://api.github.com/users/"
  constructor(private http: HttpClient) {}

  async getRepos(username: string) {
    this.repos = [];
    const value = this.http.get<Repo[]>(
      `${this.gitHubApi}/users/${username}/repos?per_page=50`    );
    await lastValueFrom(value)
      .then((repos) => (this.repos = repos))
      .catch((error) => error);
    return this.repos;
    console.log(this.repos);
  }
}
