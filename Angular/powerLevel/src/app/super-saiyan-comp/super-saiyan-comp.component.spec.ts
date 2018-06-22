import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanCompComponent } from './super-saiyan-comp.component';

describe('SuperSaiyanCompComponent', () => {
  let component: SuperSaiyanCompComponent;
  let fixture: ComponentFixture<SuperSaiyanCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
