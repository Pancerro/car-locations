
import { LocationService } from './location.service';
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService]
    });
  });

  it('should be created', () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service).toBeTruthy();
  });
  it('should have getLocation function', () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service.getLocation).toBeTruthy();
  });
});
