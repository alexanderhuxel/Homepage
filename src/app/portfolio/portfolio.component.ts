import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  portfolio = [{
    name: "Quiz",
    img: "assets/img/quiz.jpg",
    tec: ["assets/img/css.svg", "assets/img/html.svg", "assets/img/javascript.svg"]
  }, {
    name: "Tic Tac Toe",
    img: "assets/img/tictactoe.jpg",
    tec: ["assets/img/css.svg", "assets/img/html.svg", "assets/img/javascript.svg"]
  }, {
    name: "Homepage",
    img: "assets/img/homepage.jpg",
    tec: ["assets/img/angular.svg", "assets/img/sass.svg", "assets/img/html.svg", "assets/img/typescript.svg", "assets/img/javascript.svg"]
  }, {
    name: "Ring Of Fire",
    img: "assets/img/ringoffire.webp",
    tec: ["assets/img/angular.svg", "assets/img/sass.svg", "assets/img/html.svg", "assets/img/typescript.svg", "assets/img/javascript.svg"]
  }]
  constructor() { }

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



