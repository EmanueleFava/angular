import { Component } from '@angular/core';

@Component({
  selector: 'app-array-of-products',
  standalone: false,
  templateUrl: './array-of-products.component.html',
  styleUrl: './array-of-products.component.scss',
})
export class ArrayOfProductsComponent {
  products = [
    {
      name: 'Pc',
      prezzo: 150,
    },
    {
      name: 'Headset',
      prezzo: 45,
    },
    {
      name: 'Mouse',
      prezzo: 4.5,
    },
  ];
}
