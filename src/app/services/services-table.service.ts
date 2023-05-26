import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Itable } from '../itable';

@Injectable({
  providedIn: 'root',
})
export class ServicesTableService {
  url = '../data.json';

  constructor(private HttpClient: HttpClient) {}

  public getData(): Observable<Itable[]> {
    //return type of observable spicfic table interface

    return this.HttpClient.get<Itable[]>(this.url); // here i mack get to return arry from type table interface
  }
  // getOneItem(id:number) : Itable[] {

  // }

  // ELEMENT_DATA: TableElment[] =
  // [
  //   {position: 1, name: 'Hydrogen', newData : 1.0079, Age: 54, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 2, name: 'Helium', newData : 4.0026, Age: 76, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 3, name: 'Lithium', newData : 6.941, Age: 47, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 4, name: 'Beryllium', newData : 9.0122, Age: 40, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 5, name: 'Boron', newData : 10.811, Age: 43, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 6, name: 'Carbon', newData : 12.0107, Age: 12, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 7, name: 'Nitrogen', newData : 14.0067, Age: 12, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 8, name: 'Oxygen', newData : 15.9994, Age: 12, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 9, name: 'Fluorine', newData : 18.9984, Age: 12, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  //   {position: 10, name: 'Neon', newData : 20.1797, Age: 12, Gender: 'male', AppointFor: 'Dr.', imgURL : 'dell.png'},
  // ];
}

function getDat(): any {}
console.log(getDat());
