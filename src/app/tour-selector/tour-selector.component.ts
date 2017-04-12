import { Component, OnInit } from '@angular/core';

import { TourPreview } from './tour-preview';

@Component({
  selector: 'app-tour-selector',
  templateUrl: './tour-selector.component.html',
  styleUrls: ['./tour-selector.component.css']
})
export class TourSelectorComponent implements OnInit {
  tours : Array<TourPreview>;

  constructor() {
    this.tours=[
      {id:5, title:'Allah', url:'google.com', imageUrl:'http://placehold.it/300'},
      {id:5, title:'Allasdasdah', url:'google.com', imageUrl:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg'},
      {id:5, title:'asda', url:'google.com', imageUrl:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg'},
      {id:5, title:'pasdk', url:'google.com', imageUrl:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg'},
      {id:5, title:'asddk', url:'google.com', imageUrl:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg'}
    ];
  }

  ngOnInit() {
  }

}
