import { NgModule } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import arts from 'src/assets/arts.json';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageBiographieComponent } from './pages/page-biographie/page-biographie.component';
import { PageChoreoComponent } from './pages/page-choreo/page-choreo.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageCouvertureComponent } from './pages/page-couverture/page-couverture.component';
import { PageDemarchesComponent } from './pages/page-demarches/page-demarches.component';
import { PageErreurComponent } from './pages/page-erreur/page-erreur.component';
import { PageExperiencesComponent } from './pages/page-experiences/page-experiences.component';
import { PageArtsVisuelsComponent } from './pages/page-arts-visuels/page-arts-visuels.component';
import { PagePublicationsComponent } from './pages/page-publications/page-publications.component';
import { PageCollectionComponent } from './pages/page-collection/page-collection.component';
import { PageCollectionsComponent } from './pages/page-collections/page-collections.component';

// for SEO rank on Google / metadata when using the link on other sites
export interface SeoData {
	title: string;
	metaTags: MetaDefinition[];
}

export interface TypedRouteData {
	seo: SeoData;
	showHeader: boolean;
}

interface TypedRoute extends Route {
	data: TypedRouteData;
}

type TypedRoutes = TypedRoute[];

const defaultTitle = 'OPHELIE ART | Portfolio';
const defaultDescription = '';
const defaultImage = '';

class BasicData implements TypedRouteData {
	constructor(route: string, title: string = defaultTitle, description: string = defaultDescription,
		showHeader = false, image: string = defaultImage) {
		this.seo = {
			title,
			metaTags: [
				{ name: 'description', content: description },
				{ property: 'og:title', content: title },
				{ property: 'og:description', content: description },
				{ property: 'og:image', content: image },
				{ property: 'og:url', content: `${environment.baseUrl}${route}` },
			],
		};
		this.showHeader = showHeader;
	}

	seo: SeoData;

	showHeader: boolean;
}

const routes: TypedRoutes = [
	{
		path: '',
		pathMatch: 'full',
		component: PageCouvertureComponent,
		data: new BasicData('', defaultTitle, 'Découvrez le profil et les créations d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'accueil',
		pathMatch: 'full',
		component: PageAcceuilComponent,
		data: new BasicData('', defaultTitle, 'Découvrez le profil et les créations d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'a-propos',
		pathMatch: 'full',
		component: PageAboutComponent,
		data: new BasicData('a-propos', 'OPHELIE ART | Profil', 'Découvrez le profil d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'a-propos/biographie',
		pathMatch: 'full',
		component: PageBiographieComponent,
		data: new BasicData('a-propos/biographie', 'OPHELIE ART | Biographie', 'Découvrez la biographie d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'a-propos/demarches',
		pathMatch: 'full',
		component: PageDemarchesComponent,
		data: new BasicData('a-propos/demarches', 'OPHELIE ART | Démarche artistique', 'Découvrez la démarche artistique d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'a-propos/experiences',
		pathMatch: 'full',
		component: PageExperiencesComponent,
		data: new BasicData('a-propos/experiences', 'OPHELIE ART | Expériences', 'Découvrez les expériences en danse et en chorégraphie d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'danses',
		component: PageChoreoComponent,
		data: new BasicData('danses', 'OPHELIE ART | Danses & performances', 'Découvrez les créations chorégraphiques d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'arts-visuels',
		component: PageArtsVisuelsComponent,
		data: new BasicData('arts-visuels', 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'arts-visuels/dessins',
		component: PageCollectionsComponent,
		data: new BasicData('arts-visuels/dessins', 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'arts-visuels/peintures',
		component: PageCollectionsComponent,
		data: new BasicData('arts-visuels/peintures', 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'arts-visuels/sculptures',
		component: PageCollectionsComponent,
		data: new BasicData('arts-visuels/sculptures', 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'publications',
		component: PagePublicationsComponent,
		data: new BasicData('publications', 'OPHELIE ART | Publications', 'Découvrez les publications d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
	{
		path: 'contact',
		component: PageContactComponent,
		data: new BasicData('contact', 'OPHELIE ART | Contact', 'Contactez Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
	},
];

arts.dessins.collections.forEach((x) => routes.push({
	path: `arts-visuels/dessins/${x.url}`,
	component: PageCollectionComponent,
	data: new BasicData(`arts-visuels/dessins/${x.url}`, 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
}));

arts.peintures.collections.forEach((x) => routes.push({
	path: `arts-visuels/peintures/${x.url}`,
	component: PageCollectionComponent,
	data: new BasicData(`arts-visuels/peintures/${x.url}`, 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
}));

arts.sculptures.collections.forEach((x) => routes.push({
	path: `arts-visuels/sculptures/${x.url}`,
	component: PageCollectionComponent,
	data: new BasicData(`arts-visuels/sculptures/${x.url}`, 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.', true),
}));
routes.push(
	{
		path: '**',
		component: PageErreurComponent,
		data: new BasicData('erreur', 'OPHELIE ART', ''),
	},
);

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule { }
