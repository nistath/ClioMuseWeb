import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSelectorCategoryComponent } from './tour-selector-category.component';

describe('TourSelectorCategoryComponent', () => {
  let component: TourSelectorCategoryComponent;
  let fixture: ComponentFixture<TourSelectorCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourSelectorCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSelectorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
