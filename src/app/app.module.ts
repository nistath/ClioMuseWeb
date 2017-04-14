import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { TourSelectorComponent } from './tour-selector/tour-selector.component';
import { TourSelectorCategoryComponent } from './tour-selector-category/tour-selector-category.component';
import { TourSelectorGridComponent } from './tour-selector-grid/tour-selector-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TourSelectorComponent,
    TourSelectorCategoryComponent,
    TourSelectorGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/selector',
        pathMatch: 'full'
      },
      {
        path: 'selector',
        component: TourSelectorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
