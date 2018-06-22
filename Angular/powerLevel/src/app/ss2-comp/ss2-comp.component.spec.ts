import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss2CompComponent } from './ss2-comp.component';

describe('Ss2CompComponent', () => {
  let component: Ss2CompComponent;
  let fixture: ComponentFixture<Ss2CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss2CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
