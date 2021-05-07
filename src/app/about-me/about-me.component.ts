import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  constructor(public scrollService: ScrollService) { }

  // header = new HeaderComponent;

  ngOnInit(): void {

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