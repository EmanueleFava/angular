import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioInputComponent } from './figlio-input.component';

describe('FiglioInputComponent', () => {
  let component: FiglioInputComponent;
  let fixture: ComponentFixture<FiglioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiglioInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiglioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
