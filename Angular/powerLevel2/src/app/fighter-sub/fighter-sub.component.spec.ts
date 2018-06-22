import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterSubComponent } from './fighter-sub.component';

describe('FighterSubComponent', () => {
  let component: FighterSubComponent;
  let fixture: ComponentFixture<FighterSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FighterSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
