import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCompattoComponent } from './observable-compatto.component';

describe('ObservableCompattoComponent', () => {
  let component: ObservableCompattoComponent;
  let fixture: ComponentFixture<ObservableCompattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableCompattoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableCompattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
