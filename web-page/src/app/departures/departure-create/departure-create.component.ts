import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DepartureService } from '../departure.service';

@Component({
  selector: 'app-departure-create',
  templateUrl: './departure-create.component.html',
  styleUrls: ['./departure-create.component.css']
})
export class DepartureCreateComponent implements OnInit {
  operations: any[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: DepartureService) { }

  ngOnInit() {
    this.operations = [
      { title: 'Canceled', id: 0 },
      { title: 'Departed', id: 1 },
      { title: 'Gate closed', id: 2 },
      { title: 'Final call', id: 3 }

    ]
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    this.service.addDeparture(form.value);
    this.router.navigate(['departures']);

  }

}
