import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentObjectComponent } from './parent-object.component';

describe('ParentObjectComponent', () => {
  let component: ParentObjectComponent;
  let fixture: ComponentFixture<ParentObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
