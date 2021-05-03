import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FootnotesComponent } from './footnotes/footnotes.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FootnotesComponent,
		PhotoGridComponent,
	],
	imports: [
		CommonModule,
		AppRoutingModule,
	],
	exports: [
		HeaderComponent,
		FootnotesComponent,
		PhotoGridComponent,
	],
})
export class UiToolsModule { }
