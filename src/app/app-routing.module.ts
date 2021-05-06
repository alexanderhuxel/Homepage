import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandComponent } from './land/land.component';
import { LaunchComponent } from './launch/launch.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PreloaderComponent } from './preloader/preloader.component';

const routes: Routes = [
  { path: '', component: LaunchComponent },
  // { path: '', component: PreloaderComponent },
  // { path: 'about-me', component: AboutMeComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'x', component: HeaderComponent },
  // { path: 'x', component: FooterComponent },
  // { path: 'land', component: LandComponent },
  { path: 'dataprotection', component: DataProtectionComponent },
  { path: 'imprint', component: ImprintComponent },
  // { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
