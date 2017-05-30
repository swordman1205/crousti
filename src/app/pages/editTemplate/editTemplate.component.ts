import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './editTemplate.component.html',
  styleUrls: ['./editTemplate.component.scss']
})
export class EditTemplateComponent implements OnInit {
  shop:any = {
    name: 'Test Shop'
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

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.shop.id = params['id'];
    });
  }

  onSelectTemplate(event) {
    this.router.navigate(['/shop', this.shop.id]);
  }
}
