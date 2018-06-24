import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCompComponent } from './quote-comp.component';

describe('QuoteCompComponent', () => {
  let component: QuoteCompComponent;
  let fixture: ComponentFixture<QuoteCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
