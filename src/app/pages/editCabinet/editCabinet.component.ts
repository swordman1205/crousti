import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './editCabinet.component.html',
  styleUrls: ['./editCabinet.component.scss']
})
export class EditCabinetComponent implements OnInit {
  shop:any = {
    name: 'Shop #1'
  };
  cabinet:any = {
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
  };

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.shop.id = params['id'];
    });
  }

  updateCabinet(data) {
    this.cabinet.template = data.template;
    this.cabinet.name = data.name;
    this.router.navigate(['/shop', this.shop.id]);
  }

  cancelEdit() {
    this.router.navigate(['/shop', this.shop.id]);
  }
}
