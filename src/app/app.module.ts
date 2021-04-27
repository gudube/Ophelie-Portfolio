import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageChoreoComponent } from './page-choreo/page-choreo.component';
import { PagePeinturesComponent } from './page-peintures/page-peintures.component';
import { SeoService } from './seo-service.service';
import { PageErreurComponent } from './page-erreur/page-erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    PageChoreoComponent,
    PagePeinturesComponent,
    PageErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
