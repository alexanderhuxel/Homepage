import { Component, OnInit } from '@angular/core';
import { GlobalvaribalesService } from '../services/globalvaribales.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  portfolio = [{
    name: "Quiz",
    img: "assets/newimg/quiz.png",
    tec: ["assets/img/sass.svg", "assets/img/html.svg", "assets/img/javascript.svg"],
    JsDoc: "https://alexhuxel.de/quiz/out/",
    link: "https://alexhuxel.de/quiz/"
  }, {
    name: "Join",
    img: "assets/newimg/join.png",
    tec: ["assets/img/sass.svg", "assets/img/html.svg", "assets/img/javascript.svg"],
    JsDoc: "https://alexhuxel.de/join/out/",
    link: "https://alexhuxel.de/join"

  }, {
    name: "Homepage",
    img: "assets/newimg/homepage.png",
    tec: ["assets/img/angular.svg", "assets/img/sass.svg", "assets/img/html.svg", "assets/img/typescript.svg", "assets/img/javascript.svg"],
    JsDoc: "https://alexhuxel.de/documentation",
    link: "https://alexhuxel.de"
  }, {
    name: "Ring Of Fire",
    img: "assets/newimg/ringoffire.png",
    tec: ["assets/img/angular.svg", "assets/img/sass.svg", "assets/img/html.svg", "assets/img/typescript.svg", "assets/img/javascript.svg"],
    JsDoc: "https://ring-of-fire-70a6a.web.app/documentation",
    link: "https://ring-of-fire-70a6a.web.app/"
  }]
  constructor(public globalvariables: GlobalvaribalesService) { }

  ngOnInit(): void {

  }
  fadeInProject(id: any) {
    let cont = document.getElementById(id);
    if (cont?.classList.contains("active")) {
      cont.classList.remove("active");
    } else {
      cont?.classList.add("active");
    }

  }
}



