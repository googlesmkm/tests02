import { Component, OnInit, ViewChild } from '@angular/core';
import { PolicyService } from './policy.service';
import { Policy } from './policy.model';

import * as _ from 'lodash';

/**
 * This class represents the lazy loaded PolicyComponent.
 */
@Component({
  selector: 'app-root',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
  providers: [
    PolicyService,
  ]
})

export class PolicyComponent implements OnInit {
  enabledPolicies: Policy[];
  disabledPolicies: Policy[];
  enabledPoliciesSize: number;
  disabledPoliciesSize: number;

  constructor(
    private policyService: PolicyService
  ) {}

  ngOnInit() {
    this.getEnabledPolicies();
    this.getDisabledPolicies();
  }

  // get all enabled policies data
  getEnabledPolicies(): void {
    this.policyService
      .getPolicies()
      .subscribe(policies => {
        this.enabledPolicies = _.filter(policies, {'status': 'enabled' });
        this.enabledPoliciesSize = this.getSizeOf(this.enabledPolicies);
      });
  }

  // get all disabled policies data
  getDisabledPolicies(): void {
    this.policyService
      .getPolicies()
      .subscribe(policies => {
        this.disabledPolicies = _.filter(policies, {'status': 'disabled' });
        this.disabledPoliciesSize = this.getSizeOf(this.disabledPolicies);
      });
  }

  // get size of array or object
  getSizeOf(array):number {
    let size:number;
    size = _.size(array);
    return size;
  }
}
