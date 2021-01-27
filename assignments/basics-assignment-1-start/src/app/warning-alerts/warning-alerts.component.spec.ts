import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlertsComponent } from './warning-alerts.component';

describe('WarningAlertsComponent', () => {
  let component: WarningAlertsComponent;
  let fixture: ComponentFixture<WarningAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
