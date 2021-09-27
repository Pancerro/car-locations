import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {locationsFeatureKey, locationsReducer} from './locations.reducer';
import {LocationsEffects} from './locations.effects';
import {LocationService} from "../../shared/services/location.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(locationsFeatureKey, locationsReducer),
    EffectsModule.forFeature([LocationsEffects])
  ],
  providers: [LocationService],
  declarations: []
})
export class LocationsStoreModule {
}
