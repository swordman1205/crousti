import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'cabinet-configuration',
  templateUrl: './cabinetConfiguration.component.html',
  styleUrls: ['./cabinetConfiguration.component.scss']
})
export class CabinetConfigurationComponent implements OnInit {
  @Input() shopName: string;
  @Input() cabinet: any;
  @Output() cancelStep:EventEmitter<any> = new EventEmitter<any>();
  @Output() onAddCabinet:EventEmitter<any> = new EventEmitter<any>();

  isAssigning:boolean = false;
  offsetPos:number = 0;

  selectedCell:any;
  subDivPosition:any = {};

  modalColor:string;

  products:any = [
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

  constructor() { }

  ngOnInit() {
    this.init();
  }

  getRandomImage() {
    let index = Math.floor(Math.random() * this.products.length);
    return this.products[index].thumbnail;
  }

  init() {
    for (let i = 0; i < this.cabinet.unit; i++) {
      for (let j = 0; j < this.cabinet.length; j++) {
        if (!this.cabinet.template.data[i][j].content) {
          let content = [];
          for (let k = 0; k < this.cabinet.template.data[i][j].type[1]; k++) {
            content[k] = [];

            for (var l = 0; l < this.cabinet.template.data[i][j].type[0]; l++) {
              content[k][l] = this.getRandomImage();
            }
          }
          this.cabinet.template.data[i][j].content = content;
        } else {
          for (let k = 0; k < this.cabinet.template.data[i][j].type[1]; k++) {
            for (var l = 0; l < this.cabinet.template.data[i][j].type[0]; l++) {
              if (!this.cabinet.template.data[i][j].content[k][l]) {
                this.cabinet.template.data[i][j].content[k][l] = this.getRandomImage();
              }
            }
          }
        }
      }
    }
  }

  assignProduct($event) {
    var event = $event.$event;
    var rowIndex = $event.rowIndex;
    var cellIndex = $event.cellIndex;
    var subRowIndex = $event.j;
    var subCellIndex = $event.i;
    event.stopPropagation();

    if (!this.isAssigning) {
      this.selectedCell = this.cabinet.template.data[rowIndex][cellIndex];
      this.subDivPosition = [subRowIndex, subCellIndex];

      this.modalColor = $event.color;

      if (!this.selectedCell.content) {
        let content = [];
        for (var i = 0; i < this.selectedCell.type[1]; i++) {
          content[i] = [];

          for (var j = 0; j < this.selectedCell.type[0]; j++) {
            content[i][j] = '';
          }
        }
        this.selectedCell.content = content;
      }

      let divPos = event.y - event.offsetY + event.srcElement.clientHeight + 20;

      if (window.innerHeight * 0.4 > divPos) {
        this.offsetPos = 0;
      } else {
        this.offsetPos = window.innerHeight * 0.4 - divPos;
      }
      this.isAssigning = true;
    } else {
      this.reset();
    }
  }

  reset() {
    this.offsetPos = 0;
    this.subDivPosition = [];
    this.isAssigning = false;
  }

  addProduct(product) {
    this.selectedCell.content[this.subDivPosition[0]][this.subDivPosition[1]] = product.thumbnail;
    this.reset();
  }

  cancel() {
    this.cancelStep.emit();
  }

  save() {
    if (!this.cabinet.name) {
      alert('Cabinet name is required!');
    } else {
      this.onAddCabinet.emit(this.cabinet);
    }
  }
}
