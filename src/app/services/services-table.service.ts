import { Injectable } from '@angular/core';
import { TableElment } from '../table-elment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesTableService {
  ELEMENT_DATA: TableElment[] =
  [
    {position: 1, name: 'Hydrogen', newData : 1.0079, Age: 54, Gender: 'male', AppointFor: 'Dr.', Setting : '12'},
    {position: 2, name: 'Helium', newData : 4.0026, Age: 76, Gender: 'male', AppointFor: 'Dr.', Setting : '21'},
    {position: 3, name: 'Lithium', newData : 6.941, Age: 47, Gender: 'male', AppointFor: 'Dr.', Setting : '21'},
    {position: 4, name: 'Beryllium', newData : 9.0122, Age: 40, Gender: 'male', AppointFor: 'Dr.', Setting : '21'},
    {position: 5, name: 'Boron', newData : 10.811, Age: 43, Gender: 'male', AppointFor: 'Dr.', Setting : '21'},
    {position: 6, name: 'Carbon', newData : 12.0107, Age: 12, Gender: 'male', AppointFor: 'Dr.', Setting : '21'},
    {position: 7, name: 'Nitrogen', newData : 14.0067, Age: 12, Gender: 'male', AppointFor: 'Dr.', Setting : '21'},
    {position: 8, name: 'Oxygen', newData : 15.9994, Age: 12, Gender: 'male', AppointFor: 'Dr.', Setting : '21'},
    {position: 9, name: 'Fluorine', newData : 18.9984, Age: 12, Gender: 'male', AppointFor: 'Dr.', Setting : '2211'},
    {position: 10, name: 'Neon', newData : 20.1797, Age: 12, Gender: 'male', AppointFor: 'Dr.', Setting : '121'},
  ];

  constructor() { }


}
