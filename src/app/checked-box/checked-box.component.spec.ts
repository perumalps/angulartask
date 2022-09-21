import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedBoxComponent } from './checked-box.component';

describe('CheckedBoxComponent', () => {
  let component: CheckedBoxComponent;
  let fixture: ComponentFixture<CheckedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
