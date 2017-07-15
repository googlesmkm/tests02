import { Component,Input } from '@angular/core';
import { Policy } from '../Policy/policy.model';

@Component({
  selector: 'app-csp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class CspTableComponent {
  @Input() policiesList: Array<Policy>;
  @Input() tIndex: string;

  options: any = {
    moves: function (el, container, handle) {
      return handle.className === 'handle' || handle.className === 'fa fa-ellipsis-v';
    }
  };

}
