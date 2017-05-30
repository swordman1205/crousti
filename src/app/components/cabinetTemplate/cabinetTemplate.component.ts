import { Component, Input, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'cabinet-template',
  templateUrl: './cabinetTemplate.component.html',
  styleUrls: ['./cabinetTemplate.component.scss']
})
export class CabinetTemplateComponent implements OnInit {
  @Input() shopName: string;
  @Input() step:number;
  @Input() template:any;
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
    },
    {
      name: 'Cabinet Type C'
    },
    {
      name: 'Cabinet Type D'
    }
  ];
  selectedTemp:any = {};
  selectedCell:any = {};
  tempCell:any = {};

  constructor() {
    this.assignData();
  }

  ngOnInit() {
    if (this.template) {
      this.selectedTemp = this.template;
    }
  }

  assignData() {
    for (let i = 0; i < this.templates.length; i++) {
      this.templates[i].data = [];
      for (let j = 0; j < this.verticalUnit; j++) {
        this.templates[i].data.push([]);
      }
    }

    for (let i = 0; i < this.cabinetLength; i++) {
      for (let j = 0; j < this.verticalUnit; j++) {
        this.templates[0].data[j].push({
          type: [1,2]
        });
      }

      for (let j = 0; j < this.verticalUnit; j++) {
        this.templates[1].data[j].push({
          type: [2,1]
        });
      }

      for (let j = 0; j < this.verticalUnit; j++) {
        this.templates[2].data[j].push({
          type: [2,3]
        });
      }

      for (let j = 0; j < this.verticalUnit; j++) {
        this.templates[3].data[j].push({
          type: [3,2]
        });
      }
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
    for (let i = 0; i < this.verticalUnit; i++) {
      this.selectedTemp.data[i].push({
        type: [1,2]
      });
    }
    this.cabinetLength++;
  }

  addRow() {
    let tempRow = [];
    for (let i = 0; i < this.cabinetLength; i++) {
      tempRow.push({
        type: [1,2]
      });
    }
    this.selectedTemp.data.push(tempRow);
    this.verticalUnit++;
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

  changeVerticalUnit() {
    this.assignData();
  }
}
