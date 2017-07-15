import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { DragulaModule } from 'ng2-dragula';

import { PolicyService } from './Policy/policy.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PolicyModule } from './Policy/policy.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    PolicyModule,
    DragulaModule,
    TabsModule.forRoot()
  ],
  providers: [PolicyService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
