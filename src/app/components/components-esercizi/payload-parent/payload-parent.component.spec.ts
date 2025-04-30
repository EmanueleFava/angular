import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadParentComponent } from './payload-parent.component';

describe('PayloadParentComponent', () => {
  let component: PayloadParentComponent;
  let fixture: ComponentFixture<PayloadParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayloadParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayloadParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
