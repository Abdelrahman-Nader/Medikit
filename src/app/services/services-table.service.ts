import { log } from 'console';
import { TableElment } from './../table-elment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, find, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesTableService {

  url = '../../assets/data.json'; //
  id = '';
  link : any;
  product! : Observable<TableElment[]> ;
  constructor(private http: HttpClient) {}

  public getData(): Observable<TableElment[]> {    //return type of observable spicfic table interface

   let product = this.http.get<TableElment[]>(this.url); // here i mack get to return arry from type table interface
   return product;
  }
  getIds(): number {
    let ides :number = Number(this.product.pipe(map(()=>this.product)));
    return ides
  }




  // getOneItem(id: TableElment ):  Observable<TableElment>  {
//  return  this.http.get<TableElment[]>(this.url+id)
  // return this.http.get<TableElment[]>.(find(pro => pro.id==id))>
// let oneItem = this.product as Observable<TableElment[]>
// let pro = oneItem.find( pro => pro.id == id)
// return id
//  return  pro? pro: null;
   //return foundId? foundId: null;
    // }

  // ELEMENT_DATA: Itable[] =
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
