import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfProductsComponent } from './array-of-products.component';

describe('ArrayOfProductsComponent', () => {
  let component: ArrayOfProductsComponent;
  let fixture: ComponentFixture<ArrayOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayOfProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
