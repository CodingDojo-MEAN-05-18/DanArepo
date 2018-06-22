import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiyanCompComponent } from './saiyan-comp.component';

describe('SaiyanCompComponent', () => {
  let component: SaiyanCompComponent;
  let fixture: ComponentFixture<SaiyanCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiyanCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiyanCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
