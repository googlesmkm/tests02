import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Policy } from './policy.model';

import 'rxjs/add/operator/map';

@Injectable()
export class PolicyService {

  private policyDataUrl = '../../data/policies.json';

  constructor(private http: Http) { }

  getPolicies(): Observable<Policy[]> {
    return this.http.get(this.policyDataUrl).map(res => res.json());
  }

}
