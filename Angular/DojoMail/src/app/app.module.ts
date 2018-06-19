import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { FormTestComponent } from './form-test/form-test.component';
import { RegFormComponent } from './reg-form/reg-form.component'; // <-- Import HttpModule

@NgModule({
  declarations: [
    AppComponent, FormTestComponent, RegFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
