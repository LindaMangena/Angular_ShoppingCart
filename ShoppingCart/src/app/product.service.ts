import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] =[
    new Product(
      1,
      'Electric Kettle',
      'The one touch button design allows you to easily and safely open the lid with one hand.',
      25,
      1,
      ['','','']
    ),
    new Product(
      2,
      'Wireless Mouse',
      'The one touch button design allows you to easily and safely open the lid with one hand.',
      25,
      1,
      ['','','']
    ),
    new Product(
      2,
      'Iron Stream ',
      'Used vertically to steam cloths on hanger or to take out wrinkles from curtains and drapes',
      15
      ,
      1,
      ['','','']
    )
  ]

  constructor(){}

  getProducts(){
    return this.products;

  }
  
}

