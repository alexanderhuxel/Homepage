import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LandComponent } from './land/land.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LaunchComponent } from './launch/launch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendComponent } from './send/send.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';
import { ValidDataComponent } from './valid-data/valid-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    AboutMeComponent,
    PreloaderComponent,
    DataProtectionComponent,
    ImprintComponent,
    LaunchComponent,
    SendComponent,
    ErrorComponent,
    ValidDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
