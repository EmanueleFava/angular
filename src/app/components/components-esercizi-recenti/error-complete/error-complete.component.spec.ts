import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCompleteComponent } from './error-complete.component';

describe('ErrorCompleteComponent', () => {
  let component: ErrorCompleteComponent;
  let fixture: ComponentFixture<ErrorCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
