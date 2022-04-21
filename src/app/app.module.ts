import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompareFollowersPageComponent } from './components/compare-followers-page/compare-followers-page.component';
import { FollowerCardComponent } from './components/follower-card/follower-card.component';
import { FollowersPageComponent } from './components/followers-page/followers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    CompareFollowersPageComponent,
    FollowerCardComponent,
    FollowersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
