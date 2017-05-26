import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cabinet-configuration',
  templateUrl: './cabinetConfiguration.component.html',
  styleUrls: ['./cabinetConfiguration.component.scss']
})
export class CabinetConfigurationComponent {
  @Input() shopName: string;
  @Input() cabinet: any;
  @Output() cancelStep:EventEmitter<any> = new EventEmitter<any>();
  @Output() onAddCabinet:EventEmitter<any> = new EventEmitter<any>();

  isAssigning:boolean = false;
  offsetPos:number = 0;

  selectedCell:any;
  subDivPosition:any = {};

  constructor() {}

  getRepeatList(n) {
    var tempList = [];
    for (var i = 0; i < n; i++) {
      tempList.push(i);
    }
    return tempList;
  }

  assingProduct(event, rowIndex, cellIndex, subRowIndex, subCellIndex) {
    event.stopPropagation();

    if (!this.isAssigning) {
      this.selectedCell = this.cabinet.template.data[rowIndex][cellIndex];
      this.subDivPosition = [subRowIndex, subCellIndex];

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

      if (window.innerHeight/2 > divPos) {
        this.offsetPos = 0;
      } else {
        this.offsetPos = window.innerHeight/2 - divPos;
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

  getColor(rowIndex, colIndex) {
    var colors = ['pink', '#ffff7f', 'greenyellow', 'lightskyblue', 'sandybrown', 'lightgrey'];
    var index = this.cabinet.length * rowIndex + colIndex;
    return colors[index]? colors[index] : colors[0];
  }
}
