import { DepartureService } from './departure.service';
import { Component, OnInit } from '@angular/core';
import data from '../../assets/departures.json';
import { Departure } from './departure.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departure',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {
departures:Departure[];
show = false;
operations:any[];
selectedValue:string;
searchByFlightTo:string;

  constructor(private departureService:DepartureService,
              private router: Router,
              private route: ActivatedRoute){

  }

  ngOnInit() {
    this.departures = this.departureService.getDepartures();
    this.operations = [
      {title: 'Canceled' , id: 0},
      {title: 'Departed' , id: 1},
      {title: 'Gate closed' , id: 2},
      {title: 'Final call' , id: 3}

    ]
  }

  openMenu(){
    this.show = !this.show;

  }




}

