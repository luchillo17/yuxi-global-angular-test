import { TestBed, inject } from '@angular/core/testing';

import { TeamChallengeService } from './team-challenge.service';

describe('TeamChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamChallengeService]
    });
  });

  it('should be created', inject([TeamChallengeService], (service: TeamChallengeService) => {
    expect(service).toBeTruthy();
  }));
});
