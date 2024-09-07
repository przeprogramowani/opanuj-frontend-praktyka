import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CountriesSearchContainerComponent } from './containers/countries-search-container/countries-search-container.component';
import { SearchTitleComponent } from './components/search-title/search-title.component';
import { NameFieldComponent } from './components/name-field/name-field.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import { SortSelectComponent } from './components/sort-select/sort-select.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesSearchContainerComponent,
    SearchTitleComponent,
    NameFieldComponent,
    SearchPropertyComponent,
    SortSelectComponent,
    CountriesListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
