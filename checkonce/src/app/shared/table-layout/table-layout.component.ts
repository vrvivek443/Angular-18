import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent {

  drop!:any[];
  checkBox: boolean = false;
  checkSelection:boolean = false;
  @Input() header!: any[];
  @Input() datas!: any[];
  @Output() mod: EventEmitter<any> = new EventEmitter()

  dropdownValues: any[] = []
 
  ngOnInit()
  { 

  }

  primeFun(id:any)
  {
    // this.checkBox = false;
    this.checkSelection = this.checkSelection ? false: true;
    if(this.checkSelection)
    this.mod.emit(id);
  }

  getValueByHeader(item: any, headerKey?: string): string {
    return headerKey ? item[headerKey] || '' : ''; // Access the value using the key if it exists
  }

  onChanges()
  {
    this.checkBox = this.checkBox ? false: true;
  }
}
