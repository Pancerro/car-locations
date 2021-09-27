import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ROUTE_NAMES} from "../../shared/ROUTE_NAMES";
import {Store} from "@ngrx/store";
import {RootStore} from "../../root-store";
import {FetchLocations} from "../../root-store/locations/locations.actions";
import {ActiveGuard} from "../../shared/guard/active.guard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ROUTE = ROUTE_NAMES;
  constructor(private router: Router,
              private store$: Store<RootStore>,
              private guard: ActiveGuard) { }

  ngOnInit(): void {
    this.getAllCarLocations();

  }
  goToMap() {
    this.guard.setActive(true);
    this.router.navigate([this.ROUTE.map])
  }
  getAllCarLocations() {
    this.store$.dispatch(new FetchLocations());
  }
}
