import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'cabinet-template',
  templateUrl: './cabinetTemplate.component.html',
  styleUrls: ['./cabinetTemplate.component.scss']
})
export class CabinetTemplateComponent {
  @Input() shopName: string;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>(); 

  cabinetLength:number;
  verticalUnit: number = 2;
  
  @ViewChild('cellModal') cellModal: any;

  templates:any = [
    {
      name: 'Cabinet Type A',
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
            type: [1,2] 
          },
          { 
            type: [1,2] 
          },
          { 
            type: [1,2] 
          }
        ]
      ]
    },
    {
      name: 'Cabinet Type B',
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
  ];
  selectedTemp:any = {};
  selectedCell:any = {};
  tempCell:any = {};
  step:number = 1;

  constructor() {}

  getRepeatList(n) {
    var tempList = [];
    for (var i = 0; i < n; i++) {
      tempList.push(i);
    }
    return tempList;
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

  addNewCellInRow(rowIndex) {
    this.selectedTemp.data[rowIndex].push({
      type: [1,2]
    });
  }

  checkUpTemp() {
    this.onSelect.emit({
      length: this.cabinetLength,
      unit: this.verticalUnit,
      template: this.selectedTemp
    });
  }

  showCellModal(cell, rowIndex, cellIndex) {
    this.selectedCell = [rowIndex, cellIndex];
    this.tempCell = {
      type: [cell.type[0], cell.type[1]]
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
}
