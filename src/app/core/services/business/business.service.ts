import { Injectable } from '@angular/core';
import { Business } from '../../models/business/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  business!: Business;

  constructor() { }

  save(business: Business) {
    this.business = business;
  }
}
