import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ConfigService } from '.';

@Injectable()
export class UserChallengeService {

  constructor(
    private http: Http,
    private config: ConfigService,
  ) { }

  /**
   * getUserChallenges
   */
  public getUserChallenges() {
    const uri = this.config.apiUri + 'assets/fake-data/MyChallenges.json';

    return this.http
      .get(uri)
      .map(res => res.json().results || []);
  }
}
