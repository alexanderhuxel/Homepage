import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  imprint = "/imprint";
  dataprotection = "/dataprotection";
  menuOpen: boolean = false;



  constructor(public router: Router, public scrollService: ScrollService) {

  }

  openMenu() {
    if (this.menuOpen == false) {
      document.getElementById("menuicon")?.classList.add("active");
      document.getElementById("menu")?.classList.remove("d-none");
      document.getElementById("mobilemenu")?.classList.remove("d-none")
      document.getElementById("mobilemenu")?.classList.add("open");
      this.menuOpen = true;
    } else {
      document.getElementById("mobilemenu")?.classList.add("d-none");
      document.getElementById("menuicon")?.classList.remove("active");
      document.getElementById("menu")?.classList.add("d-none");
      document.getElementById("mobilemenu")?.classList.remove("open");
      this.menuOpen = false;
    }
  }


  ngOnInit(): void {
    console.log(window.location.pathname)
  }

  // scrollInto(destination: any) {
  //   if (window.location.pathname != "/") {
  //     sessionStorage.setItem('goal', destination)
  //     //window.location.href = "/";
  //     this.router.navigateByUrl("/");
  //   } else {
  //     destination = document.getElementById(destination);
  //     destination.scrollIntoView({ block: 'end', behavior: 'smooth' });
  //     console.log(destination)
  //   }

  // }
}
