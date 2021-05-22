import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToolsModule } from '../ui-tools/ui-tools.module';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageChoreoComponent } from './page-choreo/page-choreo.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { PagePeinturesComponent } from './page-peintures/page-peintures.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePublicationsComponent } from './page-publications/page-publications.component';

@NgModule({
	declarations: [
		PageChoreoComponent,
		PagePeinturesComponent,
		PageErreurComponent,
		PageAcceuilComponent,
		PageContactComponent,
		PagePublicationsComponent,
	],
	imports: [
		CommonModule,
		UiToolsModule,
	],
	exports: [
		PageChoreoComponent,
		PagePeinturesComponent,
		PageErreurComponent,
		PageAcceuilComponent,
		PagePublicationsComponent,
	],
})
export class PagesModule { }
