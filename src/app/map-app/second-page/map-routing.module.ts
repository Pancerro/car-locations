import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MapComponent} from "./map/map.component";
import {CarLocationResolver} from "../../shared/resolver/car-location.resolver";
import {ActiveGuard} from "../../shared/guard/active.guard";


const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    resolve: {
      location: CarLocationResolver
    },
    canActivate: [ActiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CarLocationResolver
  ]
})
export class MapRoutingModule { }
