import { Component, Input } from '@angular/core';

import { Shop } from '../../models/shop.model';

@Component({
  selector: 'shop-list',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss']
})
export class ShopListComponent {
  @Input() items: Array<Shop>;
  @Input() cardType: string;
  @Input() maxLine: number;
  @Input() insertable: number;

  constructor() {
    
  }
}
