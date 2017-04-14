import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSelectorGridComponent } from './tour-selector-grid.component';

describe('TourSelectorGridComponent', () => {
  let component: TourSelectorGridComponent;
  let fixture: ComponentFixture<TourSelectorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourSelectorGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSelectorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
