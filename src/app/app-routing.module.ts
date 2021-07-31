import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageBiographieComponent } from './pages/page-biographie/page-biographie.component';
import { PageChoreoComponent } from './pages/page-choreo/page-choreo.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageDemarchesComponent } from './pages/page-demarches/page-demarches.component';
import { PageErreurComponent } from './pages/page-erreur/page-erreur.component';
import { PageExperiencesComponent } from './pages/page-experiences/page-experiences.component';
import { PagePeinturesComponent } from './pages/page-peintures/page-peintures.component';
import { PagePublicationsComponent } from './pages/page-publications/page-publications.component';

// for SEO rank on Google / metadata when using the link on other sites
interface SeoData {
	title: string;
	metaTags: {
		name?: string,
		property?: string,
		content: string
	}[];
}

interface TypedRoute extends Route {
	data: SeoData;
}

type TypedRoutes = TypedRoute[];

const defaultTitle = 'OPHELIE ART | Portfolio';
const defaultDescription = '';
const defaultImage = '';

class BasicData implements SeoData {
	constructor(route: string, title: string = defaultTitle, description: string = defaultDescription,
		image: string = defaultImage) {
		this.title = title;
		this.metaTags = [
			{ name: 'description', content: description },
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:image', content: image },
			{ property: 'og:url', content: `${environment.baseUrl}${route}` },
		];
	}

	title: string;

	metaTags: { name?: string | undefined; property?: string | undefined; content: string; }[];
}

const routes: TypedRoutes = [
	{
		path: '',
		pathMatch: 'full',
		component: PageAcceuilComponent,
		data: new BasicData('', defaultTitle, 'Découvrez le profil et les créations d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'a-propos',
		pathMatch: 'full',
		component: PageAboutComponent,
		data: new BasicData('a-propos', 'OPHELIE ART | Profil', 'Découvrez le profil d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'a-propos/biographie',
		pathMatch: 'full',
		component: PageBiographieComponent,
		data: new BasicData('biographie', 'OPHELIE ART | Biographie', 'Découvrez la biographie d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'a-propos/demarches',
		pathMatch: 'full',
		component: PageDemarchesComponent,
		data: new BasicData('demarche', 'OPHELIE ART | Démarche artistique', 'Découvrez la démarche artistique d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'a-propos/experiences',
		pathMatch: 'full',
		component: PageExperiencesComponent,
		data: new BasicData('experiences', 'OPHELIE ART | Expériences', 'Découvrez les expériences en danse et en chorégraphie d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'danses',
		component: PageChoreoComponent,
		data: new BasicData('danses', 'OPHELIE ART | Danses & performances', 'Découvrez les créations chorégraphiques d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'arts-visuels',
		component: PagePeinturesComponent,
		data: new BasicData('arts-visuels', 'OPHELIE ART | Arts visuels', 'Découvrez les créations d\'art visuel d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'publications',
		component: PagePublicationsComponent,
		data: new BasicData('publications', 'OPHELIE ART | Publications', 'Découvrez les publications d’Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: 'contact',
		component: PageContactComponent,
		data: new BasicData('contact', 'OPHELIE ART | Contact', 'Contactez Ophélie.Art, danseuse, chorégraphe et artiste contemporaine multidisciplinaire.'),
	},
	{
		path: '**',
		component: PageErreurComponent,
		data: new BasicData('erreur', 'OPHELIE ART', ''),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule],
})
export class AppRoutingModule { }
