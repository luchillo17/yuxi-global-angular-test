import { TeamChallengeEffects } from './team-challenge.effects';
import { UserChallengeEffects } from './user-challenge.effects';

export * from './team-challenge.effects';
export * from './user-challenge.effects';

export const Effects = [
  TeamChallengeEffects,
  UserChallengeEffects,
];
