import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import { FetchLocations,
  LoadLocations, LocationsActions, LocationsActionTypes
} from './locations.actions';
import {LocationService} from "../../shared/services/location.service";


@Injectable()
export class LocationsEffects {

  @Effect()
  fetchLocations$ = this.actions$.pipe(
    ofType<FetchLocations>(LocationsActionTypes.FetchLocations),
    switchMap(() => {
      return this.locationService.getLocation()
        .pipe(map(data => new LoadLocations(data)));
    }));

  constructor(private actions$: Actions<LocationsActions>,
              private locationService: LocationService) {
  }

}
