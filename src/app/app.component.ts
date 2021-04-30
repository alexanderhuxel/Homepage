import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Homepage';
  constructor(public router: Router, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }


      window.scrollTo(0, 0);
    });
  }


}
