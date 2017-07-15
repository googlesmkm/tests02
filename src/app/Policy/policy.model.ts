import {AntiMalwareReputationObserver} from '../shared/antimalware.model';
import {PolicyObserver} from './policy-observer.model';

export interface Policy {
  order: number;
  name: string;
  description: string;
  protocolsUserAgents: PolicyObserver;
  urlFiltering: PolicyObserver;
  applications: PolicyObserver;
  objects: PolicyObserver;
  antiMalwareAndReputation: AntiMalwareReputationObserver;
}
