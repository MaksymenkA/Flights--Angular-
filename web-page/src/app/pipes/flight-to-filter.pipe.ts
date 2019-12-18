import { Departure } from '../departures/departure.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filterByFlightTo'
})
export class FlightToFilterPipe implements PipeTransform {
transform(departures:Departure[], searchByFlightTo:string){
if(!departures || !searchByFlightTo){
  return departures;
}
return departures.filter(departure =>departure.city.toLowerCase().indexOf(searchByFlightTo.toLowerCase()) !== -1);
}


}
