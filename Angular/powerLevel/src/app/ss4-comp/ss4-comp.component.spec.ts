import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss4CompComponent } from './ss4-comp.component';

describe('Ss4CompComponent', () => {
  let component: Ss4CompComponent;
  let fixture: ComponentFixture<Ss4CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss4CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss4CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
