import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tour-selector-category',
  templateUrl: './tour-selector-category.component.html',
  styleUrls: ['./tour-selector-category.component.css']
})
export class TourSelectorCategoryComponent implements OnInit {
  @Output() catClick = new EventEmitter<String>();
  categories: Array<String>;

  constructor() {
    this.categories = ['all', 'cncr', 'prn', 'fck', 'kk'];
  }

  emitCategory(category) {
    this.catClick.emit(category);
  }

  ngOnInit() {
  }

}
