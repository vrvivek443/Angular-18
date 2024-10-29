import { Component } from '@angular/core';
import { DataTableColumn } from '../store/user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  dropvalues= [
    {
      label: "Unreserved",
      value: "UNR"
    },
    {
      label: "Reserved",
      value: "RSR"
    },
    {
      label: "Cancelled",
      value: "CNL"
    }
  ]
  dropvalues2= [
    {
      label: "Draw",
      value: "D"
    },
    {
      label: "Win",
      value: "W"
    },
    {
      label: "Lost",
      value: "L"
    }
  ]
  headers: DataTableColumn[] = [
    {
      name: "Tick It", type: "checkbox"
    },
    {
      name: "CheckOnce", type: "dropdown", selectValues: this.dropvalues
    },
    {
      name: "Result", type: "dropdown", selectValues: this.dropvalues2
    },
    { name: "Name", key: "Name" },  // Mapping header name to data property
    { name: "Age", key: "age" },
    { name: "Level", key: "class" }
  ];

  data = [
    { id: 1, Name: "adam", age: "32", class: "Level 6" },
    { id: 2, Name: "Christopher Hart", age: "43", class: "Level 7" }
  ];

  farse(event:any)
  {
    console.log(event)
  }
}
