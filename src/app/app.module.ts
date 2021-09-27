import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./map-app/first-page/home.component";
import {MapAppModule} from "./map-app/second-page/map-app.module";
import {RootStoreModule} from "./root-store/root-store.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MapAppModule,
    AppRoutingModule,
    RootStoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
