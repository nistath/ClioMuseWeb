import { Component, OnInit } from '@angular/core';

import { TourPreview } from 'app/tour-preview';
import { TourListService } from 'app/tour-list.service';

@Component({
  selector: 'app-tour-selector-grid',
  templateUrl: './tour-selector-grid.component.html',
  styleUrls: ['./tour-selector-grid.component.css'],
  providers: [TourListService]
})
export class TourSelectorGridComponent implements OnInit {
  tours : Array<TourPreview>;
  category: String = "all";

  constructor(private tourService: TourListService) {}

  changeCategory(event) {
    this.category = event;
    this.tours = this.tourService.getToursByCategory(this.category);
  }

  ngOnInit() {
    this.tours = this.tourService.getTours();
  }
}
