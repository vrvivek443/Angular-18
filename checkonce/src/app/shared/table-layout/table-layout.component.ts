import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataTableColumn } from 'src/app/store/user.model';

@Component({
  selector: 'table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent {

  drop!:any[];
  checkBox: boolean = false;
  noOfChecked: any[] = [];

  @Input() header!: DataTableColumn[];
  @Input() datas!: any[];
  @Output() mod: EventEmitter<any> = new EventEmitter()

  dropdownValues: any[] = []
 
  ngOnInit()
  { 

  }

  onToggleChanges(event:any, id:any)
  {
    if(event.target.checked)
      this.noOfChecked.push(id);
    else
      this.noOfChecked = this.noOfChecked.filter(item => item !== id)
    this.mod.emit(this.noOfChecked);
  }

  getValueByHeader(item: any, headerKey?: string): string {
    return headerKey ? item[headerKey] || '' : ''; // Access the value using the key if it exists
  }

  onChanges(event:any)
  {
    const checked = event.target.checked; 
    this.datas.forEach((item)=> {
      item.selected = checked
      if(checked)
      this.noOfChecked.push(item.id)
      else
      this.noOfChecked.splice(0, this.noOfChecked.length)
    })
    this.mod.emit(this.noOfChecked);

  }
}
