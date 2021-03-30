import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }




  ngOnInit(): void {
  }

  async sendMail() {
    try {
      console.log("triggerd")
      const formData = new FormData();
      formData.append('name', 'Junus');
      formData.append('email', 'Hallo');
      formData.append('phone', '^123');
      formData.append('message', '345');
      let url = 'https://alexhuxel.de/send_mail.php';
      let response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: formData // body data type must match "Content-Type" header
      });
      // Success dialog
    } catch (e) {
      // Error dialog
    }
  }
}
