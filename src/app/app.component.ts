// import { Component } from '@angular/core';
// // import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


// // export interface Vegetable {
// //   name: string;
// // }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
  //  selector: 'form-field-appearance-example',
  // templateUrl: 'form-field-appearance-example.html',
// })
// export class AppComponent { }

  
//   vegetables: Vegetable[] = [
//     { name: 'apple' },
//     { name: 'banana' },
//     { name: 'strawberry' },
//     { name: 'orange' },
//     { name: 'kiwi' },
//     { name: 'cherry' },
//     { name: 'apple' },
//     { name: 'banana' },
//     { name: 'strawberry' },
//     { name: 'orange' },
//     { name: 'kiwi' },
//     { name: 'cherry' },
    

//   ];

// drop(event: CdkDragDrop<Vegetable[]>) {
//     moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
//   }
// }


import { Component } from '@angular/core';

export interface EmployeeDetail {
  id: number;
  name: string;
  role: string;
  age: number;
}

const ELEMENT_DATA: EmployeeDetail[] = [
  {id: 1001, name: 'Andrew',   role: 'Software', age: 32},
  {id: 1002, name: 'Jack',     role: 'Software', age: 28},
  {id: 1003, name: 'Max',      role: 'Software', age: 29},
  {id: 1004, name: 'Bijo',     role: 'Software', age: 31},
  {id: 1005, name: 'Cathy',    role: 'Software', age: 23},
  {id: 1006, name: 'Robert',   role: 'Software', age: 28},
  {id: 1007, name: 'Candice',  role: 'Software', age: 24},
  {id: 1008, name: 'White',    role: 'Software', age: 33},
  {id: 1009, name: 'James',    role: 'Software', age: 27},
  {id: 1010, name: 'Vince',    role: 'Software', age: 30},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card';

  displayedColumns: string[] = ['id', 'name', 'role', 'age'];
  dataSource = ELEMENT_DATA;
}