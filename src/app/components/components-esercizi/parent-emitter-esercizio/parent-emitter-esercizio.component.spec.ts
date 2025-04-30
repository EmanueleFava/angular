import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEmitterEsercizioComponent } from './parent-emitter-esercizio.component';

describe('ParentEmitterEsercizioComponent', () => {
  let component: ParentEmitterEsercizioComponent;
  let fixture: ComponentFixture<ParentEmitterEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentEmitterEsercizioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEmitterEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
