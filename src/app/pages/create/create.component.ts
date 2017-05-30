import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectComponent } from 'ng2-select';

import { ShopService } from '../../services';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  step:number = 1;
  shopForm : FormGroup;
  warning:string = '';
  shop:any = {};
  cabinet:any = {};

  titles:any = [];

  constructor(private fb: FormBuilder, private router:Router, private shopService:ShopService) {
    this.shopForm = fb.group({
      'name' : [null, Validators.required],
      'type1': [false],
      'type2': [false],
      'type3': [false]
    });

    this.shopService.search('').subscribe((response:any) => {
      response.forEach((item:any) => {
        this.titles.push(item.name);
      });
    });
  }

  cabinetCreation() {
    if (this.shop.name) {
      this.warning = '';
      this.shop.types = [
        this.shopForm.value.type1,
        this.shopForm.value.type2,
        this.shopForm.value.type3
      ];
      this.step = 2;
    } else {
      this.warning = 'Please insert the shop name!';
    }
  }

  onSelectTemplate($event) {
    if ($event) {
      this.cabinet = $event;
      this.step = 3;
    }
  }

  addCabinet(data) {
    this.cabinet = data;
    if (!this.shop.cabinets) {      
      this.shop.cabinets = [this.cabinet];
    } else {
      this.shop.cabinets.push(this.cabinet);
    }
    this.router.navigate(['/shop', 'temp']);
  }

  selected(event) {
    this.shop.name = event.text;
  }
}
