import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChallengesComponent } from './team-challenges.component';

describe('TeamChallengesComponent', () => {
  let component: TeamChallengesComponent;
  let fixture: ComponentFixture<TeamChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
