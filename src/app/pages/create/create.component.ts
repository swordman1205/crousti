import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SelectComponent} from 'ng2-select';

import {ShopService} from '../../services';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  step: number = 1;
  shopForm: FormGroup;
  warning: string = '';
  shop: any = {};
  cabinet: any = {};

  titles: any = [];

  chartOptions = {
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true
  };

  // Doughnut
  public doughnutChartLabels: string[] = ['On the go', 'Replenishment', 'Treasure hunt'];
  public doughnutChartData: number[] = [33, 33, 33]; // 350 450 100
  public doughnutChartType: string = 'doughnut';

  typeDistribution: {
    'minType1': number;
    'maxType1': number;
    'minType2': number;
    'maxType2': number;
    'minType3': number;
    'maxType3': number;
  };

  regionsComplex: any[] = [
    {'name': 'Vlaanderen', 'icon': '/assets/img/flags/flanders.svg'},
    {'name': 'Wallonië', 'icon': '/assets/img/flags/wallonia.svg'},
    {'name': 'Brussel', 'icon': '/assets/img/flags/brussels.svg'}
  ]

  regions: string[] = [
    'Vlaanderen',
    'Wallonië',
    'Brussel'
    // 'Antwerpen',
    // 'Limburg',
    // 'Oost-Vlaanderen',
    // 'Vlaams-Brabant',
    // 'West-Vlaanderen',
    // 'Henegouwen',
    // 'Luik',
    // 'Luxemburg',
    // 'Namen',
    // 'Waals-Brabant'
  ];
  itemsRegions: Array<any> = [];
  itemsCountries: Array<any> = [];

  countriesComplex: any[] = [
    {'name': 'België', 'icon': '/assets/img/flags/belgium23ds.svg'},
    {'name': 'Frankrijk', 'icon': '/assets/img/flags/france.svg'},
    {'name': 'Nederland', 'icon': '/assets/img/flags/netherlands.svg'}
  ];

  countries: string[] = [
    'België',
    'Frankrijk',
    'Nederland'
  ]

  constructor(private fb: FormBuilder, private router: Router, private shopService: ShopService) {
    this.regionsComplex.forEach((region: { name: string, icon: string }) => {
      this.itemsRegions.push({
        id: region.name,
        text: `<img src='${region.icon}' height='16'></img>&nbsp;&nbsp;${region.name}`
      });
    });

    this.countriesComplex.forEach((country: { name: string, icon: string }) => {
      this.itemsCountries.push({
        id: country.name,
        text: `<img src='${country.icon}' height='16'></img>&nbsp;&nbsp;${country.name}`
      });
    });

    this.shopForm = fb.group({
      'name': [null, Validators.required],
      'country': [null, Validators.required],
      'location': [null, Validators.required],
      'typeslider1': [10],
      'typeslider2': [10],
      'typeslider3': [10]// ,
      // 'type1': [false],
      // 'type2': [false],
      // 'type3': [false]
    });

    this.typeDistribution = {
      'minType1': 0,
      'maxType1': 0,
      'minType2': 0,
      'maxType2': 0,
      'minType3': 0,
      'maxType3': 0
    };

    this.typeDistribution.minType1 = 0;
    this.typeDistribution.maxType1 = 100;
    this.typeDistribution.minType2 = 0;
    this.typeDistribution.maxType2 = 100;
    this.typeDistribution.minType3 = 0;
    this.typeDistribution.maxType3 = 100;

    this.shopService.search('').subscribe((response: any) => {
      response.forEach((item: any) => {
        this.titles.push(item.name);
      });
    });
  }

  testElement() {
    return false;
  }

  isBelgium(): boolean {
    return (this.shop.country === 'België' || !this.shop.country);
  }

  updateChart(event): void {
    console.log('updateChart', event);
    console.log('this.shopForm.get(\'typeslider1\').value', this.shopForm.get('typeslider1').value);
    console.log('this.shopForm.get(\'typeslider2\').value', this.shopForm.get('typeslider2').value);
    console.log('this.shopForm.get(\'typeslider3\').value', this.shopForm.get('typeslider3').value);

    this.doughnutChartData = this.doughnutChartData.slice();

    this.typeDistribution.maxType1 = (100 - this.doughnutChartData[1] - this.doughnutChartData[2] >= 0) ? 100 - this.doughnutChartData[1] - this.doughnutChartData[2] : 0;
    this.typeDistribution.maxType2 = (100 - this.doughnutChartData[0] - this.doughnutChartData[2] >= 0) ? 100 - this.doughnutChartData[0] - this.doughnutChartData[2] : 0;
    this.typeDistribution.maxType3 = (100 - this.doughnutChartData[0] - this.doughnutChartData[1] >= 0) ? 100 - this.doughnutChartData[0] - this.doughnutChartData[1] : 0;

    // this.doughnutChartData[0] = this.shopForm.get('typeslider1').value;
    // this.doughnutChartData[0] = this.doughnutChartData[0] + 1;
    // this.doughnutChartData[1] = this.shopForm.get('typeslider2').value;
    // this.doughnutChartData[1] = this.doughnutChartData[1] + 1;
    // this.doughnutChartData[2] = this.shopForm.get('typeslider3').value;
    // this.doughnutChartData[2] = this.doughnutChartData[2] + 1;
  }

  cabinetCreation() {
    // this.shop.name = 'blabla';
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

  selectRegion(event) {
    console.log('selectRegion', event);
    console.log('selectRegion', event.id);
    // this.shop.location = event.text;
    this.shop.location = event.id;
  }

  selectCountry(event) {
    console.log('selectCountry', event);
    console.log('selectCountry', event.id);
    // console.log('selectCountry', event.text);
    // console.log('selectCountry', event.target.value);
    // this.shop.country = event.text;
    this.shop.country = event.id;
  }

  selectShopName(event) {
    console.log('called selectShopName', event);
    console.log('event.target.value', event.target.value);
    // this.shop.name = event.text;
    this.shop.name = event.target.value;
  }

  // events
  public chartClicked(e: any): void {
    console.log('chartClicked', e);
  }

  public chartHovered(e: any): void {
    console.log('chartHovered', e);
  }
}
