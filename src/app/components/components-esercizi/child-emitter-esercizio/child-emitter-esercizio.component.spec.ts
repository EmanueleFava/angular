import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmitterEsercizioComponent } from './child-emitter-esercizio.component';

describe('ChildEmitterEsercizioComponent', () => {
  let component: ChildEmitterEsercizioComponent;
  let fixture: ComponentFixture<ChildEmitterEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildEmitterEsercizioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEmitterEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
