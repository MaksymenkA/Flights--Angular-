import { Component, OnInit } from '@angular/core';
import data from '../../assets/departures.json';
import { Departure } from './departure.model.js';
import { Subject } from 'rxjs/';


export class DepartureService {
  private departures: Departure[] = data;
  departureChanged = new Subject<Departure[]>();

  getDepartures(){
    console.log(this.departures);
    return this.departures.slice();
  }

  addDeparture(departure:Departure){
    this.departures.unshift(departure);
    this.departureChanged.next(this.departures.slice());

  }





























  // tickets: ITicket[] = [];
  // operationTypes: any[] = [];
  // id: string;
  // selectedDropdownItem: string;
  // selectedOption: string;
  // userModel:string[];
  // constructor() {

  // }

  // ngOnInit() {
  //   this.tickets = data;

  //   this.operationTypes =
  //     [{ title: 'Wygenerowanie biletu', id: 0 },
  //     { title: 'Przywołanie biletu', id: 1 },
  //     { title: 'Zakończenie biletu', id: 2 },
  //     { title: 'Anulowanie biletu', id: 3 }]
  // }
  // Search() {
  //   if (this.id != "") {
  //     this.tickets = this.tickets.filter(res => {
  //       return res.id.toString().match(this.id.toString().trim());

  //     })
  //   } else if (this.id == "") {
  //     this.ngOnInit();
  //   }
  // }

  // displayOperationType(operationType) {
  //   switch (operationType) {
  //     case 0:
  //       return this.operationTypes[0].title;
  //     case 1:
  //       return this.operationTypes[1].title;
  //     case 2:
  //       return this.operationTypes[2].title;
  //     case 3:
  //       return this.operationTypes[3].title
  //     default:
  //       return "Nothing"
  //   }
  // }

  // changeOperationTypes(op: any) {
  //   console.log(op);

  // }
  // addToJson(userModel) {
  //   console.log(userModel);
  // }
}

