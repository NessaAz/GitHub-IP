import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareFollowersPageComponent } from './compare-followers-page.component';

describe('CompareFollowersPageComponent', () => {
  let component: CompareFollowersPageComponent;
  let fixture: ComponentFixture<CompareFollowersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareFollowersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareFollowersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
