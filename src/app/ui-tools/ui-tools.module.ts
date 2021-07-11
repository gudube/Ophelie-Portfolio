import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FootnotesComponent } from './footnotes/footnotes.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { PageBackgroundComponent } from './page-background/page-background.component';
import { SpotlightListComponent } from './spotlight-list/spotlight-list.component';
import { SpotlightItemComponent } from './spotlight-item/spotlight-item.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { FullImageViewerComponent } from './full-image-viewer/full-image-viewer.component';
import { MenuCirclesComponent } from './menu-circles/menu-circles.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FootnotesComponent,
		PhotoGridComponent,
		PageBackgroundComponent,
		SpotlightListComponent,
		SpotlightItemComponent,
		TitleHeaderComponent,
  		FullImageViewerComponent,
    	MenuCirclesComponent,
	],
	imports: [
		CommonModule,
		AppRoutingModule,
	],
	exports: [
		HeaderComponent,
		FootnotesComponent,
		PhotoGridComponent,
		PageBackgroundComponent,
		SpotlightListComponent,
		SpotlightItemComponent,
		TitleHeaderComponent,
		MenuCirclesComponent
	],
})
export class UiToolsModule { }
