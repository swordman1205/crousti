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

  modalColor:string;

  constructor() {}

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
