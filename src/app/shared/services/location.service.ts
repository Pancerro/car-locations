import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CarLocation} from "../interface/carLocation";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }
  getLocation() {
    return this.httpClient.get<CarLocation[]>(environment.apiUrl);
  }
}
