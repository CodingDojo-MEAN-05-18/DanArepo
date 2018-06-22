import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // this is needed for all forms to actually work

import { AppComponent } from './app.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { SaiyanCompComponent } from './saiyan-comp/saiyan-comp.component';
import { SuperSaiyanCompComponent } from './super-saiyan-comp/super-saiyan-comp.component';
import { Ss2CompComponent } from './ss2-comp/ss2-comp.component';
import { Ss3CompComponent } from './ss3-comp/ss3-comp.component';
import { Ss4CompComponent } from './ss4-comp/ss4-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    SaiyanCompComponent,
    SuperSaiyanCompComponent,
    Ss2CompComponent,
    Ss3CompComponent,
    Ss4CompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // import the new component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
