import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageChoreoComponent } from './page-choreo/page-choreo.component';
import { PagePeinturesComponent } from './page-peintures/page-peintures.component';
import { SeoService } from './seo-service.service';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageChoreoComponent,
    PagePeinturesComponent,
    PageErreurComponent,
    PageAcceuilComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
