import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss3CompComponent } from './ss3-comp.component';

describe('Ss3CompComponent', () => {
  let component: Ss3CompComponent;
  let fixture: ComponentFixture<Ss3CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss3CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
