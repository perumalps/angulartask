import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTrackingComponent } from './money-tracking.component';

describe('MoneyTrackingComponent', () => {
  let component: MoneyTrackingComponent;
  let fixture: ComponentFixture<MoneyTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
