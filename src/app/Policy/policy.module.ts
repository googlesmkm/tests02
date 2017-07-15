import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DragulaModule } from 'ng2-dragula';

import { PolicyComponent } from './policy.component';
import { CspTableComponent } from '../TableView/table.component';
import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyService } from './policy.service';

@NgModule({
  imports: [CommonModule, PolicyRoutingModule, DragulaModule, TabsModule.forRoot()],
  declarations: [PolicyComponent, CspTableComponent],
  exports: [PolicyComponent, CspTableComponent],
  providers: [PolicyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PolicyModule { }
