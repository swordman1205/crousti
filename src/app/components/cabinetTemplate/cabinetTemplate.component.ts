import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'cabinet-template',
  templateUrl: './cabinetTemplate.component.html',
  styleUrls: ['./cabinetTemplate.component.scss']
})
export class CabinetTemplateComponent {
  @Input() shopName: string;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>(); 

  cabinetLength:number = 3;
  verticalUnit: number = 2;
  
  @ViewChild('cellModal') cellModal: any;

  templates:any = [
    {
      name: 'Cabinet Type A'
    },
    {
      name: 'Cabinet Type B'
    }
  ];
  selectedTemp:any = {};
  selectedCell:any = {};
  tempCell:any = {};
  step:number = 1;

  constructor() {
    this.assignData();
  }

  assignData() {
    this.templates[0].data = [[], []];
    this.templates[1].data = [[], []];
    for (let i = 0; i < this.cabinetLength; i++) {
      this.templates[0].data[0].push({
        type: [1,2]
      });
      this.templates[0].data[1].push({
        type: [1,2]
      });
      this.templates[1].data[0].push({
        type: [2,1]
      });
      this.templates[1].data[1].push({
        type: [2,1]
      });
    }
  }

  selectTemplate(template) {
    if (!this.cabinetLength) {
      alert('Please insert the length of cabinet.');
    } else if (this.cabinetLength < 1 || this.cabinetLength > 10) {
      alert('The length of cabinet should be between 1 and 10.');
    } else {
      this.selectedTemp = JSON.parse(JSON.stringify(template));
      this.step = 2;
    }
  }

  selectAnotherTemp() {
    this.step = 1;
    this.selectedTemp = {};
  }

  addNewCellInRow() {
    this.selectedTemp.data.forEach(row => {
      row.push({
        type: [1,2]
      });
    });
    this.cabinetLength++;
  }

  checkUpTemp() {
    this.onSelect.emit({
      length: this.cabinetLength,
      unit: this.verticalUnit,
      template: this.selectedTemp
    });
  }

  showCellModal(event) {
    this.selectedCell = [event.rowIndex, event.cellIndex];
    this.tempCell = {
      type: [event.cell.type[0], event.cell.type[1]]
    };
    this.cellModal.show();
  }

  cancel() {
    this.cellModal.hide();
  }

  previewSubdiv(i, j) {
    this.tempCell.type[0] = j + 1;
    this.tempCell.type[1] = i + 1;
  }

  updateSubdivisions() {
    this.cancel();
    this.selectedTemp.data[this.selectedCell[0]][this.selectedCell[1]] = {
      type: [this.tempCell.type[0], this.tempCell.type[1]]
    };
  }

  changeLength() {
    if (!this.cabinetLength) {
      alert('The length of cabinet is required!');
    } else if (this.cabinetLength < 1 || this.cabinetLength > 10) {
      alert('The length of cabinet should be between 1 and 10.');
    } else {
      this.assignData();
    }
  }
}
