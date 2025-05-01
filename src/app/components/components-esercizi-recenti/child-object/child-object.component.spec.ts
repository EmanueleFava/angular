import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObjectComponent } from './child-object.component';

describe('ChildObjectComponent', () => {
  let component: ChildObjectComponent;
  let fixture: ComponentFixture<ChildObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
