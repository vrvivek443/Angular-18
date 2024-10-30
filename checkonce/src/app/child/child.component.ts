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
      { id: 2, Name: "Christopher Hart", age: "43", class: "Level 7" },
      { id: 3, Name: "Emily Clark", age: "29", class: "Level 5" },
      { id: 4, Name: "Sophia Turner", age: "36", class: "Level 8" },
      { id: 5, Name: "James Smith", age: "50", class: "Level 10" },
      { id: 6, Name: "Oliver Johnson", age: "28", class: "Level 4" },
      { id: 7, Name: "Liam Williams", age: "38", class: "Level 9" },
      { id: 8, Name: "Ava Brown", age: "25", class: "Level 3" },
      { id: 9, Name: "Isabella Jones", age: "30", class: "Level 6" },
      { id: 10, Name: "Mason Garcia", age: "33", class: "Level 7" },
      { id: 11, Name: "Charlotte Miller", age: "41", class: "Level 5" },
      { id: 12, Name: "Ethan Davis", age: "27", class: "Level 8" },
      { id: 13, Name: "Mia Rodriguez", age: "35", class: "Level 9" },
      { id: 14, Name: "Amelia Martinez", age: "39", class: "Level 10" },
      { id: 15, Name: "Elijah Hernandez", age: "31", class: "Level 4" }
  ];
  

  farse(event:any)
  {
    console.log(event)
  }
}
