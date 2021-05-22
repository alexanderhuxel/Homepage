import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../error/error.component';
import { SendComponent } from '../send/send.component';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { GlobalvaribalesService } from '../services/globalvaribales.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent implements OnInit {

  error = false;
  @Input() name: string = "";
  @Input() email: string = "";
  @Input() phone: string = "";
  @Input() message: string = "";


  constructor(public dialog: MatDialog, public router: Router, public globalvariables: GlobalvaribalesService) { }



  openDialog(): void {
    const dialogRef = this.dialog.open(SendComponent);
  }
  openError(): void {
    const errorRef = this.dialog.open(ErrorComponent);
  }

  ngOnInit(): void {


  }



  async sendMail(f: NgForm) {
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
      this.openDialog();
      f.reset();
    } catch (e) {
      this.openError();
    }
  }
}

