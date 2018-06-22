import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerMainComponent } from './power-main/power-main.component';
import { FighterSubComponent } from './fighter-sub/fighter-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerMainComponent,
    FighterSubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
