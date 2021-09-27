import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  createSearchForm() {
    return new FormGroup({
      'car-name': new FormControl(''),
      'car-color': new FormControl(''),
      'car-type': new FormControl(''),
      'min-car-range': new FormControl('', [Validators.min(0)]),
      'max-car-range': new FormControl('', [Validators.min(0)]),
      'min-car-battery': new FormControl('', [Validators.min(0), Validators.max(100)]),
      'max-car-battery': new FormControl('',[Validators.min(0), Validators.max(100)]),
      'car-status': new FormControl('')
    });
  }
}
