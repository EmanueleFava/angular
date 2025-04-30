import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitReciverComponent } from './submit-reciver.component';

describe('SubmitReciverComponent', () => {
  let component: SubmitReciverComponent;
  let fixture: ComponentFixture<SubmitReciverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitReciverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitReciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
