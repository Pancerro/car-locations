import { TestBed } from '@angular/core/testing';

import { CarLocationInterceptor } from './car-location.interceptor';

describe('HttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CarLocationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CarLocationInterceptor = TestBed.inject(CarLocationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
