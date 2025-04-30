import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingParamsComponent } from './routing-params.component';

describe('RoutingParamsComponent', () => {
  let component: RoutingParamsComponent;
  let fixture: ComponentFixture<RoutingParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
