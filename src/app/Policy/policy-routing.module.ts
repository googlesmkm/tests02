import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PolicyComponent } from './policy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PolicyComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
