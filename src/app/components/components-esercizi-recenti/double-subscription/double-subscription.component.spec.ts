import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSubscriptionComponent } from './double-subscription.component';

describe('DoubleSubscriptionComponent', () => {
  let component: DoubleSubscriptionComponent;
  let fixture: ComponentFixture<DoubleSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubleSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
