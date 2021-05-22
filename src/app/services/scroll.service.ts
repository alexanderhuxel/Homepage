import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(public router: Router) { }

  scrollInto(destination: any) {
    if (this.router.url !== "/") {
      this.router.navigateByUrl("/")
        .then(result => {
          setTimeout(() => {
            destination = document.getElementById(destination);
            destination.scrollIntoView({ block: 'start', behavior: 'smooth' });
          }, 50);

        });

    } else {
      destination = document.getElementById(destination);
      destination.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

  }
}
