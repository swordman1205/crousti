import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-drawer',
  templateUrl: './templateDrawer.component.html',
  styleUrls: ['./templateDrawer.component.scss']
})
export class TemplateDrawerComponent {
  @Input() data:any;
  @Input() size:string;
  @Input() tempMode:string;
  @Input() assignable:boolean;
  @Input() cabinetLength:number;
  @Input() verticalUnit:number;
  @Input() showSize:boolean;
  @Output() onCellClick:EventEmitter<any> = new EventEmitter<any>();
  @Output() onAddColumn:EventEmitter<any> = new EventEmitter<any>();
  @Output() onAddRow:EventEmitter<any> = new EventEmitter<any>();
  @Output() onAddProduct:EventEmitter<any> = new EventEmitter<any>();

  winHeight:number;
  colors:any;

  constructor() {
    this.winHeight = window.innerHeight;
    this.colors = ['pink', '#ffff7f', 'greenyellow', 'lightskyblue', 'sandybrown', 'lightgrey'];
  }

  getRepeatList(n) {
    var tempList = [];
    for (var i = 0; i < n; i++) {
      tempList.push(i);
    }
    return tempList;
  }

  showCellModal(cell, rowIndex, cellIndex) {
    this.onCellClick.emit({
      cell: cell,
      rowIndex: rowIndex,
      cellIndex: cellIndex
    });
  }

  addNewCellInRow() {
    this.onAddColumn.emit();
  }

  addNewRow() {
    this.onAddRow.emit();
  }

  assignProduct($event, rowIndex, cellIndex, j, i) {
    this.onAddProduct.emit({
      $event: $event,
      rowIndex: rowIndex,
      cellIndex: cellIndex,
      i: i,
      j: j,
      color: this.getColor(rowIndex, cellIndex)
    });
  }

  getTotalColorList() {
    var colorList = [];

    var total = this.cabinetLength * this.verticalUnit;
    var repeatedNum = Math.floor(total / this.colors.length);

    var reminder = total % this.colors.length;

    for (let i = 0; i < this.colors.length; i++) {
      for (let j = 0; j < repeatedNum; j++) {
        colorList.push(i);
      }
      if (reminder > 0) {
        colorList.push(i);
        reminder--;
      }
    }

    return colorList;
  }

  getColor(rowIndex, colIndex) {
    var index = this.cabinetLength * rowIndex + colIndex;
    return this.colors[this.getTotalColorList()[index]];
  }
}
