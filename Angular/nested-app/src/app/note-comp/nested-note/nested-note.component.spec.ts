import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNoteComponent } from './nested-note.component';

describe('NestedNoteComponent', () => {
  let component: NestedNoteComponent;
  let fixture: ComponentFixture<NestedNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
