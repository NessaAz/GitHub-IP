import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompareFollowersPageComponent } from './components/compare-followers-page/compare-followers-page.component';
import { FollowerCardComponent } from './components/follower-card/follower-card.component';
import { FollowersPageComponent } from './components/followers-page/followers-page.component';
import { FollowingCardComponent } from './components/following-card/following-card.component';
import { FollowingPageComponent } from './components/following-page/following-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoPageComponent } from './components/repo-page/repo-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ThemeDirective } from './customerDirectives/theme.directive';
import { CloseModalDirective } from './shared/close-modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    CompareFollowersPageComponent,
    FollowerCardComponent,
    FollowersPageComponent,
    FollowingCardComponent,
    FollowingPageComponent,
    LandingPageComponent,
    RepoCardComponent,
    RepoPageComponent,
    SearchFormComponent,
    UserCardComponent,
    ThemeDirective,
    CloseModalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
