import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../error/error.component';
import { SendComponent } from '../send/send.component';
import { ValidDataComponent } from '../valid-data/valid-data.component';
import { FormControl, Validators, FormGroup } from '@angular/forms'




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent implements OnInit {

  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  error = false;
  @Input() send: boolean = false;
  @Input() name: string = "";
  @Input() email: string = "";
  @Input() phone: string = "";
  @Input() message: string = "";


  constructor(public dialog: MatDialog) { }



  mailForm = new FormGroup({
    email: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)

  })

  openDialog(): void {
    const dialogRef = this.dialog.open(SendComponent);
  }
  openError(): void {
    const errorRef = this.dialog.open(ErrorComponent);
  }
  openValidData(): void {
    const errorRef = this.dialog.open(ValidDataComponent);
  }

  ngOnInit(): void {


  }

  test(): void {
    this.sendMail();
  }

  loog(): void {
    console.log("test")
  }
  async sendMail() {
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
      this.send = true;
      this.openDialog(); console.log("test");
    } catch (e) {
      this.openError();
    }
  }
}

