import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEmitterComponent } from './parent-emitter.component';

describe('ParentEmitterComponent', () => {
  let component: ParentEmitterComponent;
  let fixture: ComponentFixture<ParentEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentEmitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
