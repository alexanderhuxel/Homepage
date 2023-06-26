import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.sass'],
})
export class LaunchComponent implements OnInit {
  constructor(public scrollService: ScrollService) {}
  ngOnInit(): void {}
}
