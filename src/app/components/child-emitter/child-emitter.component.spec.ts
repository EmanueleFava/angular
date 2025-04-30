import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmitterComponent } from './child-emitter.component';

describe('ChildEmitterComponent', () => {
  let component: ChildEmitterComponent;
  let fixture: ComponentFixture<ChildEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildEmitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
