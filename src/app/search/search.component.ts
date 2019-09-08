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
  timerId = null; 

  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {

    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchCountry': [null, Validators.required]
    });

    // document.getElementById('inputSearch').addEventListener('keyup', this.debounce((k) => {
    //   console.log(k);
    // }, 1500));

    // write a function that calls changeCountryName upon value change in the form  
    this.searchForm.get('searchCountry').valueChanges.subscribe(value => {
      // if (this.timerId) {
      //   clearTimeout(this.timerId);
      // };
      // this.timerId = setTimeout(() => {
        console.log(this.searchForm.get('searchCountry').value);
        this.service.changeCountryName(this.searchForm.get('searchCountry').value as string);  
      //}, 500);  
    })
  }

  // private debounce = (func, timer: number) => {
  //   let timerId = null;
  //   return (...args) => {
  //     if(timerId) {
  //       clearTimeout(timerId);
  //     }
  //     timerId = setTimeout(() => {
  //       func(...args);
  //     }, timer);
  //   }
  // }

}
