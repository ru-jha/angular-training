import { Component } from '@angular/core';

import { Product } from 'src/app/models/data.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Product 1',
      price: 10,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 2',
      price: 20,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 3',
      price: 30,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 4',
      price: 40,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 5',
      price: 50,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 6',
      price: 60,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 7',
      price: 70,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 8',
      price: 80,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 9',
      price: 90,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 10',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 11',
      price: 110,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 12',
      price: 120,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 13',
      price: 130,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 14',
      price: 140,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 15',
      price: 150,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 16',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 17',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 18',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 19',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 20',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 21',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 22',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 23',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 24',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 25',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 26',
      price: 10,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 27',
      price: 20,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 28',
      price: 30,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 29',
      price: 40,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 30',
      price: 50,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 31',
      price: 60,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 32',
      price: 70,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 33',
      price: 80,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 34',
      price: 90,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 35',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 36',
      price: 60,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 37',
      price: 70,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 38',
      price: 80,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 39',
      price: 90,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
    {
      name: 'Product 40',
      price: 100,
      imageUrl: 'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
    },
  ];
  minPrice: number = 0;
  maxPrice: number = 100;
  priceRangeOptions: number[] = [20, 40, 60, 80, 100, 120, 140, 160];
  selectedPriceRange: number = 100;
  passesFilter(price: number): boolean {
    return price >= this.minPrice && price <= this.selectedPriceRange;
  }
}
