import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerMainComponent } from './power-main.component';

describe('PowerMainComponent', () => {
  let component: PowerMainComponent;
  let fixture: ComponentFixture<PowerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
