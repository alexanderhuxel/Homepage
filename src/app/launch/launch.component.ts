import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ScrollService } from '../services/scroll.service';
@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.sass']
})
export class LaunchComponent implements OnInit {

  constructor(public scrollService: ScrollService) { }
  // header = new HeaderComponent();
  ngOnInit(): void {

    // if (sessionStorage.goal == null || undefined || "null") {
    //   console.log(sessionStorage.getItem("goal"))
    // } else {
    //   console.log(sessionStorage.getItem("goal"))
    //   this.scrollService.scrollInto(sessionStorage.goal);
    //   sessionStorage.setItem('goal', "null");
    //   console.log(sessionStorage.goal)
    // }
  }

}
