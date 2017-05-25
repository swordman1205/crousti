import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-collector',
  templateUrl: './productCollector.component.html',
  styleUrls: ['./productCollector.component.scss']
})
export class ProductCollectorComponent {
  @Output() cancel:EventEmitter<any> = new EventEmitter<any>();
  @Output() onAddProduct:EventEmitter<any> = new EventEmitter<any>();

  products:any = [];
  selectedProduct:any;

  constructor() {
    this.init();
  }

  init() {
    this.products = [
      {
        id: 1,
        name: 'Parisienne brown baguette #1',
        description: 'Duis mllis, est non commodo luctus nisi erat portutor ligula, eget lacina odio sem nec elit',
        price: 0.75,
        margin: '15%',
        thumbnail: 'http://www.veganhome.it/media/img/ricette/panino-strong.jpg'
      },
      {
        id: 2,
        name: 'Parisienne brown baguette #2',
        description: 'Duis mllis, est non commodo luctus nisi erat portutor ligula, eget lacina odio sem nec elit',
        price: 0.75,
        margin: '16%',
        thumbnail: 'http://img.freepik.com/free-photo/loaf-of-bread-on-white-background_1203-2215.jpg?size=338&ext=jpg'
      },
      {
        id: 3,
        name: 'Parisienne brown baguette #3',
        description: 'Duis mllis, est non commodo luctus nisi erat portutor ligula, eget lacina odio sem nec elit',
        price: 0.75,
        margin: '14%',
        thumbnail: 'https://hiestand.co.id/wp-content/uploads/2014/03/9408-Crispy-roll-round-35g_s1.jpg'
      },
      {
        id: 4,
        name: 'Parisienne brown baguette #4',
        description: 'Duis mllis, est non commodo luctus nisi erat portutor ligula, eget lacina odio sem nec elit',
        price: 0.75,
        margin: '12%',
        thumbnail: 'http://www.veganhome.it/media/img/ricette/panino-strong.jpg'
      },
      {
        id: 5,
        name: 'Parisienne brown baguette #5',
        description: 'Duis mllis, est non commodo luctus nisi erat portutor ligula, eget lacina odio sem nec elit',
        price: 0.75,
        margin: '17%',
        thumbnail: 'http://img.freepik.com/free-photo/loaf-of-bread-on-white-background_1203-2215.jpg?size=338&ext=jpg'
      },
      {
        id: 6,
        name: 'Parisienne brown baguette #6',
        description: 'Duis mllis, est non commodo luctus nisi erat portutor ligula, eget lacina odio sem nec elit',
        price: 0.75,
        margin: '15%',
        thumbnail: 'https://hiestand.co.id/wp-content/uploads/2014/03/9408-Crispy-roll-round-35g_s1.jpg'
      }
    ];

    this.selectedProduct = this.products[0];
  }

  close() {
    this.cancel.emit();
  }

  addToCabinet() {
    this.onAddProduct.emit(this.selectedProduct);
  }
}
