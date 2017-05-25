import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './addCabinet.component.html',
  styleUrls: ['./addCabinet.component.scss']
})
export class AddCabinetComponent implements OnInit {
  shop:any = {
    name: 'Shop #1'
  };
  cabinet:any = {};
  step:number = 1;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.shop.id = params['id'];
    });
  }

  onSelectTemplate(event) {
    if (event) {
      this.cabinet = event;
      this.step = 2;
    }
  }

  addCabinet(data) {
    this.cabinet = data;
    this.router.navigate(['/shop', this.shop.id]);
  }
}
