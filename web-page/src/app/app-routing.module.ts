import { DepartureCreateComponent } from './departures/departure-create/departure-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparturesComponent } from './departures/departures.component';


const routes: Routes = [
  { path: '', redirectTo: '/departures', pathMatch: 'full' },
  { path: 'departures', component: DeparturesComponent},
  {path:'create', component:DepartureCreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
