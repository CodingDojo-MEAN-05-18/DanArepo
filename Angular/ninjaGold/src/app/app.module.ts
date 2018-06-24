import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoldCompComponent } from './gold-comp/gold-comp.component';
import { ExploreCompComponent } from './explore-comp/explore-comp.component';
import { LogCompComponent } from './log-comp/log-comp.component';

import { NinjaGoldService } from './ninja-gold.service';

@NgModule({
  declarations: [
    AppComponent,
    GoldCompComponent,
    ExploreCompComponent,
    LogCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NinjaGoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
