import { Component, OnInit } from '@angular/core';
import { GlobalvaribalesService } from '../services/globalvaribales.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.sass']
})
export class LandComponent implements OnInit {




  constructor(public scrollService: ScrollService, public globalvariables: GlobalvaribalesService) { }

  ngOnInit(): void {
  }

}
