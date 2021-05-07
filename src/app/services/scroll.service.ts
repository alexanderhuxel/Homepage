import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(public router: Router) { }

  scrollInto(destination: any) {
    if (this.router.url !== "/") {
      console.log(this.router.url)
      this.router.navigateByUrl("/")
        .then(result => {
          setTimeout(() => {
            console.log(this.router.url)
            console.log(destination)
            destination = document.getElementById(destination);
            destination.scrollIntoView({ block: 'start', behavior: 'smooth' });
            console.log(destination)
          }, 50);

        });

    } else {
      destination = document.getElementById(destination);
      destination.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

  }
}
