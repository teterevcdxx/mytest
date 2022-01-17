import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from "./shared/store/app.reducer";
import { LoadDataEffect } from './shared/store/app.effects';
import { EffectsModule } from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ appStore: fromReducer.reducer }),
    EffectsModule.forRoot([LoadDataEffect])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
