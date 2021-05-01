import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SeoService } from './seo-service.service';
import { HeaderComponent } from './ui-tools/header/header.component';
import { UiToolsModule } from './ui-tools/ui-tools.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    UiToolsModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
