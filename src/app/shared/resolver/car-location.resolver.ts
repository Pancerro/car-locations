import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {RootStore} from "../../root-store";
import {FetchLocations} from "../../root-store/locations/locations.actions";
import {CarLocation} from "../interface/carLocation";

@Injectable({
  providedIn: 'root'
})
export class CarLocationResolver implements Resolve<boolean> {
  constructor(private store$: Store<RootStore>) {
    this.getAllCarLocations();
  }
  carLocations: Array<CarLocation> = [];
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.store$
      .pipe(select((store) => store.locations.locations))
      .subscribe((locations: Array<CarLocation>) => {
        this.carLocations = locations;
      });
    return of(this.carLocations);
  }
  getAllCarLocations() {
    this.store$.dispatch(new FetchLocations());
  }

}
