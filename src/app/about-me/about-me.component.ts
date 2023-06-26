import { Component, OnInit } from '@angular/core';
import { GlobalvaribalesService } from '../services/globalvaribales.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass'],
})
export class AboutMeComponent implements OnInit {
  constructor(
    public scrollService: ScrollService,
    public globalvariables: GlobalvaribalesService
  ) {}

  ngOnInit(): void {
    this.globalvariables.age = this.calculateAge(1994, 4);
  }

  calculateAge(birthYear: number, birthMonth: number) {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthYear;

    return currentDate.getMonth() + 1 < birthMonth ? age - 1 : age;
  }
}
