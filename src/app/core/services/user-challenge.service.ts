import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ConfigService } from '.';

@Injectable()
export class UserChallengeService {
  constructor(
    private http: Http,
    private config: ConfigService,
  ) { }

}
