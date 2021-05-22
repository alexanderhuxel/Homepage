import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GlobalvaribalesService } from '../services/globalvaribales.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  constructor(public scrollService: ScrollService, public globalvariables: GlobalvaribalesService) { }


  ngOnInit(): void {
    console.log(this.globalvariables.english)
  }


  createNewTicket() {
    return {
      title: "title",
      cat: "cat",
      descr: "descr",
      duedate: "duedate",
      urgency: "urgency"

    }
  }

}