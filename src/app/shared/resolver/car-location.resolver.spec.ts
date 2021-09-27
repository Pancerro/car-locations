import { TestBed } from '@angular/core/testing';

import { CarLocationResolver } from './car-location.resolver';
import {StoreModule} from "@ngrx/store";
import {LocationService} from "../services/location.service";

describe('CarResolver', () => {
  let resolver: CarLocationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [LocationService]});
    resolver = TestBed.inject(CarLocationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
