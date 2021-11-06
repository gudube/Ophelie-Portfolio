import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageChoreoComponent } from './page-choreo/page-choreo.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { PageArtsVisuelsComponent } from './page-arts-visuels/page-arts-visuels.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePublicationsComponent } from './page-publications/page-publications.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageExperiencesComponent } from './page-experiences/page-experiences.component';
import { PageDemarchesComponent } from './page-demarches/page-demarches.component';
import { PageBiographieComponent } from './page-biographie/page-biographie.component';
import { PageCouvertureComponent } from './page-couverture/page-couverture.component';
import { PageCollectionsComponent } from './page-collections/page-collections.component';
import { PageCollectionComponent } from './page-collection/page-collection.component';

@NgModule({
	declarations: [
		PageChoreoComponent,
		PageArtsVisuelsComponent,
		PageErreurComponent,
		PageAcceuilComponent,
		PageContactComponent,
		PagePublicationsComponent,
		PageAboutComponent,
		PageExperiencesComponent,
		PageDemarchesComponent,
		PageBiographieComponent,
		PageCouvertureComponent,
		PageCollectionsComponent,
		PageCollectionComponent,
	],
	imports: [
		CommonModule,
		UiToolsModule,
		AppRoutingModule,
		MatSliderModule,
		MatIconModule,
	],
	exports: [
		PageChoreoComponent,
		PageArtsVisuelsComponent,
		PageErreurComponent,
		PageAcceuilComponent,
		PagePublicationsComponent,
		PageAboutComponent,
		PageExperiencesComponent,
	],
})
export class PagesModule { }
