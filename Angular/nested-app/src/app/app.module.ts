import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { NoteCompComponent } from './note-comp/note-comp.component';
import { NestedNoteComponent } from './note-comp/nested-note/nested-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCompComponent,
    NestedNoteComponent
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
