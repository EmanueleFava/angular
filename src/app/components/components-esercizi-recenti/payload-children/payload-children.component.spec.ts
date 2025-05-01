import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadChildrenComponent } from './payload-children.component';

describe('PayloadChildrenComponent', () => {
  let component: PayloadChildrenComponent;
  let fixture: ComponentFixture<PayloadChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayloadChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayloadChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
