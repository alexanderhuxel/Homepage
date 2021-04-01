import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  error = false;
  @Input() name: string = "";
  @Input() email: string = "";
  @Input() phone: string = "";
  @Input() message: string = "";





  ngOnInit(): void {

  }



  async sendMail() {
    if (this.name == "" && this.phone == "" && this.email == "" && this.message == "") {
      this.error = true;
    } else {
      try {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('phone', this.phone);
        formData.append('message', this.message);
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
        console.log("success")
        this.name = "";
        this.phone = "";
        this.email = "";
        this.message = "";
      } catch (e) {
        // Error dialog
        console.log("unsuccess")
      }
    }
  }
}

export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}