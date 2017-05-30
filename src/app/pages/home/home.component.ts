import { Component } from '@angular/core';

import { Shop } from '../../models';
import { ShopService } from '../../services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  searchTerm: string = '';
  searchResultLoaded: boolean = false;

  nearestShops:Shop[] = [];
  otherShops:Shop[] = [];
  searchList:Shop[] = [];

  constructor(private shopService:ShopService) {
    this.init();
  }

  init() {
    this.shopService.getNearbyList().subscribe((res:Shop[]) => {
      this.nearestShops = res;
    });

    this.shopService.getOtherList().subscribe((res:Shop[]) => {
      this.otherShops = res;
    });
  }

  applySearch() {
    if (this.searchTerm) {
      this.shopService.search(this.searchTerm).subscribe((res:Shop[]) => {
        this.searchResultLoaded = true;
        this.searchList = res;
      });
    } else {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.searchResultLoaded = false;
    this.searchTerm = '';
    this.searchList = [];
  }
}
