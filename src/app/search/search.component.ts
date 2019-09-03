import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output('filterText') search = new EventEmitter<string>();
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {

    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchCountry': [null]
    });

    // write a function that calls changeCountryName upon value change in the form
  }

  onSearch() {
    this.search.emit(this.searchForm.get('searchCountry').value);
    //console.log(this.searchForm.get('searchCountry').value);
  }

}
