import { TestBed, inject } from '@angular/core/testing';

import { TourListService } from './tour-list.service';

describe('TourListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourListService]
    });
  });

  it('should ...', inject([TourListService], (service: TourListService) => {
    expect(service).toBeTruthy();
  }));
});
