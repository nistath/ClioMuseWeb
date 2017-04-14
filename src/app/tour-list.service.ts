import { Injectable } from '@angular/core';

import { TourPreview } from 'app/tour-preview';
import { tours } from 'app/mock-tourList';

@Injectable()
export class TourListService {

  constructor() { }

  getTours() : Array<TourPreview> {
    return tours;
  }

  getToursByCategory(category) {
    if (category == "all") return tours;

    return tours.filter((tour) => tour.category == category);
  }
}
