import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlertsComponent } from './success-alerts.component';

describe('SuccessAlertsComponent', () => {
  let component: SuccessAlertsComponent;
  let fixture: ComponentFixture<SuccessAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
