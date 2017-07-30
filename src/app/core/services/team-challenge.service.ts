import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ConfigService } from '.';

@Injectable()
export class TeamChallengeService {

  constructor(
    private http: Http,
    private config: ConfigService,
  ) { }

  /**
   * getTeamChallenges
   */
  public getTeamChallenges() {
    const uri = this.config.apiUri + 'assets/fake-data/TeamChallenges.json';

    return this.http
      .get(uri)
      .map(res => res.json().results || []);
  }
}
