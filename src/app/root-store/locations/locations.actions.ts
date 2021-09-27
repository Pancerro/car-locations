import {Action} from '@ngrx/store';

export enum LocationsActionTypes {
  LoadLocations = '[Locations] Load Locations',
  FetchLocations = '[Locations] Fetch Locations',
}

export class LoadLocations implements Action {
  readonly type = LocationsActionTypes.LoadLocations;

  constructor(public payload: Array<any>) {
  }
}

export class FetchLocations implements Action {
  readonly type = LocationsActionTypes.FetchLocations;

  constructor() {
  }
}

export type LocationsActions = LoadLocations |
  FetchLocations;
