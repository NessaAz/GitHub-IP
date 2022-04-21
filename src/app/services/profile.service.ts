import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private defaultUsername = 'nessaaz';
  private userSource = new BehaviorSubject<any>(null);
  user = this.userSource.asObservable();

  constructor(
    private http: HttpClient,
    // private requestLimitService: RequestLimitService
  ) { 
    this.getUser(this.defaultUsername);
  }

  async getUser(username: string) {
    const value = this.http.get(`${environment.githubApi}/users/${username}`);
    return await lastValueFrom(value)
      .then((user) => {
        this.userSource.next(user);
        return [user];
      })
      .catch((error) => {
        let users: any = [];
        if (error.status === 404) {
          const data = this.searchUser(username).then((result) => {
            if (result.total_count === 1) {
              // Check if it's 1 user returned
              this.userSource.next(result.items[0]);
              return result.items;
            }
            return (users = result.items);
          });
          return (users = data);
        }
        return users;
      });
  }
  async searchUser(username: string) {
    const value = this.http.get(
      `${environment.githubApi}/search/users?q=${username}&per_page=3&sort=joined&order=asc`
    );
    return await lastValueFrom(value)
      .then((result) => {
        this.requestLimitService.getRequestLimit().subscribe();
        return result;
      })
      .catch((error) => error);
  }
}
