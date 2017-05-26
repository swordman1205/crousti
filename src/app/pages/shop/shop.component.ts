import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shop:any = {
    name: 'Shop #1',
    cabinets: [
      {
        name: 'First Cabinet',
        create_at: '18/02/2014',
        length: 3,
        unit: 2,
        template: {
          data: [
            [
              { 
                type: [1,2] 
              },
              { 
                type: [1,2] 
              },
              { 
                type: [1,2] 
              }
            ], 
            [
              { 
                type: [1,3] 
              },
              { 
                type: [1,2] 
              },
              { 
                type: [1,2] 
              }
            ]
          ]
        }
      },
      {
        name: 'New pastries',
        create_at: '02/08/2014',
        length: 3,
        unit: 2,
        template: {
          data: [
            [
              { 
                type: [1,2] 
              },
              { 
                type: [1,3] 
              },
              { 
                type: [1,2] 
              }
            ], 
            [
              { 
                type: [2,2] 
              },
              { 
                type: [3,2] 
              },
              { 
                type: [1,2] 
              }
            ]
          ]
        }
      },
      {
        name: 'Summer 2016',
        create_at: '15/06/2016',
        length: 3,
        unit: 2,
        template: {
          data: [
            [
              { 
                type: [1,2] 
              },
              { 
                type: [2,2] 
              },
              { 
                type: [1,2] 
              }
            ], 
            [
              { 
                type: [3,2] 
              },
              { 
                type: [1,2] 
              },
              { 
                type: [2,2] 
              }
            ]
          ]
        }
      },
      {
        name: 'Winter 2016',
        create_at: '01/12/2016',
        length: 3,
        unit: 2,
        template: {
          data: [
            [
              { 
                type: [1,2] 
              },
              { 
                type: [1,2] 
              },
              { 
                type: [1,2] 
              }
            ], 
            [
              { 
                type: [2,1] 
              },
              { 
                type: [1,2] 
              },
              { 
                type: [1,2] 
              }
            ]
          ]
        }
      },
      {
        name: 'New pastries 2017',
        create_at: '12/02/2017',
        length: 3,
        unit: 2,
        template: {
          data: [
            [
              { 
                type: [2,1] 
              },
              { 
                type: [1,2] 
              },
              { 
                type: [3,2] 
              }
            ], 
            [
              { 
                type: [1,2] 
              },
              { 
                type: [2,2] 
              },
              { 
                type: [1,2] 
              }
            ]
          ]
        }
      }
    ]
  };

  selectedCabinet: any;
  shopId:any;

  constructor(private activatedRoute:ActivatedRoute) {
    this.selectedCabinet = this.shop.cabinets[0];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.shopId = params['id'];
    });
  }

  deleteCabinet() {
    var index = this.shop.cabinets.findIndex((cabinet) => {
      return cabinet == this.selectedCabinet;
    });
    this.shop.cabinets.splice(index, 1);
    this.selectedCabinet = this.shop.cabinets[index]? this.shop.cabinets[index] : this.shop.cabinets[0];
  }
}
