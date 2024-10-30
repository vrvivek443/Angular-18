import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataTableColumn } from 'src/app/store/user.model';

@Component({
  selector: 'table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent {

  drop!: any[];
  checkBox: boolean = false;
  noOfChecked: Set<number> = new Set();  // Initialize as Set for unique IDs

  @Input() columns!: DataTableColumn[];
  @Input() datas!: any[];
  @Output() mod: EventEmitter<Set<number>> = new EventEmitter();  // Emit as Set type

  dropdownValues: any[] = [];

  ngOnInit() {}

  onToggleChanges(event: any, id: number) {
    if (event.target.checked) {
      this.noOfChecked.add(id);  // Add to Set
    } else {
      this.noOfChecked.delete(id);  // Remove from Set
    }
    this.mod.emit(this.noOfChecked);
  }

  getValueByHeader(item: any, headerKey?: string): string {
    return headerKey ? item[headerKey] || '' : '';  // Access the value using the key if it exists
  }

  onChanges(event: any) {
    const checked = event.target.checked;

    if (checked) {
      this.datas.forEach(item => this.noOfChecked.add(item.id));  // Add all IDs to Set
    } else {
      this.noOfChecked.clear();  // Clear all IDs from Set
    }

    this.datas.forEach(item => item.selected = checked);
    this.mod.emit(this.noOfChecked);
  }
}
