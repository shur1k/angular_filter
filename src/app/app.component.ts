import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  searchText: string;

  onFilterChange(filter: string) {
    this.searchText = filter;
  }
}
