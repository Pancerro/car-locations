import {LocationsActions, LocationsActionTypes} from './locations.actions';
import {CarLocation} from "../../shared/interface/carLocation";

export const locationsFeatureKey = 'locations';

export interface LocationsState {
  locations: Array<CarLocation>;
  isLocationsLoading: boolean;
}

export const initialState: LocationsState = {
  locations: [],
  isLocationsLoading: false,
};

export function locationsReducer(state = initialState, action: LocationsActions): LocationsState {
  switch (action.type) {

    case LocationsActionTypes.LoadLocations:
      return {
        ...state,
        isLocationsLoading: false,
        locations: action.payload,
      };

    case LocationsActionTypes.FetchLocations:
      return {
        ...state,
        isLocationsLoading: true,
      };

    default:
      return state;
  }
}
