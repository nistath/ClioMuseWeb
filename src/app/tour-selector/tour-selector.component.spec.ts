import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSelectorComponent } from './tour-selector.component';

describe('TourSelectorComponent', () => {
  let component: TourSelectorComponent;
  let fixture: ComponentFixture<TourSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
