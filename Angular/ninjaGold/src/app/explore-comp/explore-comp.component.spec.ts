import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCompComponent } from './explore-comp.component';

describe('ExploreCompComponent', () => {
  let component: ExploreCompComponent;
  let fixture: ComponentFixture<ExploreCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
