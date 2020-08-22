import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableandsubscribeComponent } from './observableandsubscribe.component';

describe('ObservableandsubscribeComponent', () => {
  let component: ObservableandsubscribeComponent;
  let fixture: ComponentFixture<ObservableandsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableandsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableandsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
