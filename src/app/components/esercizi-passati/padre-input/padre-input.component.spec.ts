import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreInputComponent } from './padre-input.component';

describe('PadreInputComponent', () => {
  let component: PadreInputComponent;
  let fixture: ComponentFixture<PadreInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
