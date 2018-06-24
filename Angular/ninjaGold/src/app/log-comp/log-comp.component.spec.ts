import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCompComponent } from './log-comp.component';

describe('LogCompComponent', () => {
  let component: LogCompComponent;
  let fixture: ComponentFixture<LogCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
