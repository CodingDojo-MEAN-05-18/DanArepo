import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldCompComponent } from './gold-comp.component';

describe('GoldCompComponent', () => {
  let component: GoldCompComponent;
  let fixture: ComponentFixture<GoldCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
