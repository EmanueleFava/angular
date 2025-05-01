import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBtnComponent } from './class-btn.component';

describe('ClassBtnComponent', () => {
  let component: ClassBtnComponent;
  let fixture: ComponentFixture<ClassBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
