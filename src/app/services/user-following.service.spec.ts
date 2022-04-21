import { TestBed } from '@angular/core/testing';

import { UserFollowingService } from './user-following.service';

describe('UserFollowingService', () => {
  let service: UserFollowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFollowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
