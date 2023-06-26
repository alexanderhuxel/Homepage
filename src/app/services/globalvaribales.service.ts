import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalvaribalesService {
  english: boolean = false;

  currentYear = new Date().getFullYear();
  birthYear = 1994;
  age = this.currentYear - this.birthYear;
  constructor() {}
}
