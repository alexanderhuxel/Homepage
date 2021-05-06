import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  imprint = "/imprint";
  dataprotection = "/dataprotection";
  menuOpen: boolean = false;



  constructor() {

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

  scrollInto(destination: any) {
    if (window.location.pathname != "/") {
      console.log("no")
      window.location.href = "/";
      let test = destination;
      document.addEventListener("DOMContentLoaded", () => {
        console.log(test)
        this.scrollInto(destination);
        console.log("loaded")
      })
    } else {
      destination = document.getElementById(destination);
      destination.scrollIntoView(true);
      console.log(destination)
    }

  }
}
