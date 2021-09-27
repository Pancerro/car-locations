import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import {HttpClientModule} from "@angular/common/http";
import {GoogleMapsModule} from "@angular/google-maps";
import {MapRoutingModule} from "./map-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    MapRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MapAppModule { }
