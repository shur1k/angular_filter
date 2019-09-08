import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class DataService {

  private countryNameSource = new BehaviorSubject<string>("");
  currentCountryName = this.countryNameSource.asObservable();

  constructor() { }

  changeCountryName(country: string) {
    // add data to an observable
    this.countryNameSource.next(country);
  }
}
