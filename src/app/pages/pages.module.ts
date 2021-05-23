import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageChoreoComponent } from './page-choreo/page-choreo.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { PagePeinturesComponent } from './page-peintures/page-peintures.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePublicationsComponent } from './page-publications/page-publications.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageExperiencesComponent } from './page-experiences/page-experiences.component';

@NgModule({
	declarations: [
		PageChoreoComponent,
		PagePeinturesComponent,
		PageErreurComponent,
		PageAcceuilComponent,
		PageContactComponent,
		PagePublicationsComponent,
		PageAboutComponent,
		PageExperiencesComponent,
	],
	imports: [
		CommonModule,
		UiToolsModule,
		AppRoutingModule,
		MatSliderModule,
	],
	exports: [
		PageChoreoComponent,
		PagePeinturesComponent,
		PageErreurComponent,
		PageAcceuilComponent,
		PagePublicationsComponent,
		PageAboutComponent,
		PageExperiencesComponent,
	],
})
export class PagesModule { }
