import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GlobalvaribalesService } from '../services/globalvaribales.service';
import { ScrollService } from '../services/scroll.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(public scrollService: ScrollService, public globalvariables: GlobalvaribalesService) { }
  // header = new HeaderComponent();
  ngOnInit(): void {
  }

}
