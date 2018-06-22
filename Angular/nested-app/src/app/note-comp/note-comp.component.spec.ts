import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCompComponent } from './note-comp.component';

describe('NoteCompComponent', () => {
  let component: NoteCompComponent;
  let fixture: ComponentFixture<NoteCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
