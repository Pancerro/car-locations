import {Component, ViewChild} from '@angular/core';
import {MapAnchorPoint, MapInfoWindow} from "@angular/google-maps";
import {ActivatedRoute} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {CarLocation} from "../../../shared/interface/carLocation";
import {FormService} from "../../../shared/services/form.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @ViewChild(MapInfoWindow, {static: false}) info?: MapInfoWindow;
  searchForm: FormGroup;
  markerClustererImagePath =
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
  zoom = 12;
  center: google.maps.LatLngLiteral =  {
    lat: 0,
    lng: 0,
  }
  carLocations: Array<CarLocation> = [];
  markers: Array<any> = [];
  closeFilter = false;
  carContent: CarLocation = {
    platesNumber: '',
    sideNumber: '',
    color: '',
    type: '',
    rangeKm: 0,
    batteryLevelPct: 0,
    reservationEnd: null,
    reservation: null,
    status: '',
    locationDescription: '',
    address: '',
    mapColor: {
      rgb: '',
      alpha: 0
    },
    promotion: '',
    name: '',
    description: '',
    location: {
      latitude: 0,
      longitude: 0
    },

  };

  constructor(private activatedRoute: ActivatedRoute,
              private formService: FormService) {
    this.searchForm = formService.createSearchForm();
    if (this.activatedRoute.snapshot.data['location']) {
      this.carLocations = this.activatedRoute.snapshot.data['location']['objects'];
    }
    if (this.carLocations.length > 0) {
      this.prepareMarkers(this.activatedRoute.snapshot.data['location']['objects']);
    }
  }

  openInfo(marker: MapAnchorPoint, content: CarLocation):void  {
    this.carContent = content;
    this.info?.open(marker);
  }
  closeFilters():void  {
    this.closeFilter = !this.closeFilter;
  }
  search():void  {
    let filteredList = this.carLocations;
    if (this.searchForm.get('car-name')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.name.toString().toUpperCase() === this.searchForm.get('car-name')?.value.toString().toUpperCase());
    }
    if (this.searchForm.get('car-color')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.color.toString().toUpperCase() === this.searchForm.get('car-color')?.value.toString().toUpperCase());
    }
    if (this.searchForm.get('car-type')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.type.toString().toUpperCase() === this.searchForm.get('car-type')?.value.toString().toUpperCase());
    }
    if (this.searchForm.get('car-status')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.status.toString().toUpperCase() === this.searchForm.get('car-status')?.value.toString().toUpperCase());
    }
    if (this.searchForm.get('min-car-range')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.rangeKm > this.searchForm.get('min-car-range')?.value);
    }
    if (this.searchForm.get('max-car-range')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.rangeKm < this.searchForm.get('max-car-range')?.value);
    }
    if (this.searchForm.get('min-car-battery')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.batteryLevelPct > this.searchForm.get('min-car-battery')?.value);
    }
    if (this.searchForm.get('max-car-battery')?.value) {
      filteredList = filteredList.filter((car: CarLocation) => car.batteryLevelPct < this.searchForm.get('max-car-battery')?.value);
    }
    if (filteredList.length > 0) {
      this.prepareMarkers(filteredList);
    } else {
      this.markers = [];
    }
  }
  reset():void  {
    if (this.carLocations.length > 0) {
      this.searchForm.reset();
      this.prepareMarkers(this.carLocations);
    }
  }
  private prepareMarkers(data: Array<CarLocation>):void  {
    this.markers = [];
    data.forEach((car: CarLocation) => {
      let icon;
      if(car.status === 'AVAILABLE') {
        icon = '../assets/car-available.png';
      } else {
        icon = '../assets/car-unavailable.png';
      }
      this.markers.push({
        position: {
          lat: car.location.latitude,
          lng: car.location.longitude,
        },
        options: {
          icon: icon,
          animation: google.maps.Animation.DROP,
          size: 20
        },
        carInfo: car
      })
      this.center = {
        lat: this.markers[0].position.lat,
        lng: this.markers[0].position.lng,
      }
    })
  }
}
