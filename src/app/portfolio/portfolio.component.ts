import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  portfolio = [{
    name: "Quiz",
    img: "assets/img/Quiz.png",
    tec: ["assets/img/css.svg", "assets/img/html.svg", "assets/img/javascript.svg"]
  }, {
    name: "Tic Tac Toe",
    img: "assets/img/tictactoe.png",
    tec: ["assets/img/css.svg", "assets/img/html.svg", "assets/img/javascript.svg"]
  }, {
    name: "Homepage",
    img: "assets/img/homepage.png",
    tec: ["assets/img/angular.svg", "assets/img/sass.svg", "assets/img/html.svg", "assets/img/typescript.svg", "assets/img/javascript.svg"]
  }, {
    name: "Ring Of Fire",
    img: "assets/img/ringoffire.png",
    tec: ["assets/img/angular.svg", "assets/img/sass.svg", "assets/img/html.svg", "assets/img/typescript.svg", "assets/img/javascript.svg"]
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
