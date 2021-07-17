import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SeoService } from './seo-service.service';
import { UiToolsModule } from './ui-tools/ui-tools.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PagesModule,
		UiToolsModule,
		BrowserAnimationsModule,
	],
	providers: [SeoService],
	bootstrap: [AppComponent],
})
export class AppModule { }
