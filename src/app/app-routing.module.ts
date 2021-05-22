import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageChoreoComponent } from './pages/page-choreo/page-choreo.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageErreurComponent } from './pages/page-erreur/page-erreur.component';
import { PagePeinturesComponent } from './pages/page-peintures/page-peintures.component';

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

// TODO: mettre a jour le SEO
const defaultTitle = 'OPHELIE | Portfolio';
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
		data: new BasicData(''),
	},
	{
		path: 'a-propos',
		component: PageErreurComponent,
		data: new BasicData('a-propos'),
	},
	// {
	// 	path: 'biographie',
	// 	component: PageErreurComponent,
	// 	data: new BasicData('biographie'),
	// },
	// {
	// 	path: 'demarche',
	// 	component: PageErreurComponent,
	// 	data: new BasicData('demarche'),
	// },
	// {
	// 	path: 'experiences',
	// 	component: PageErreurComponent,
	// 	data: new BasicData('experiences'),
	// },
	{
		path: 'danses',
		component: PageChoreoComponent,
		data: new BasicData('danses'),
	},
	{
		path: 'arts-visuels',
		component: PagePeinturesComponent,
		data: new BasicData('arts-visuels'),
	},
	{
		path: 'publications',
		component: PageContactComponent,
		data: new BasicData('publications'),
	},
	{
		path: 'contact',
		component: PageContactComponent,
		data: new BasicData('contact'),
	},
	{
		path: '**',
		component: PageErreurComponent,
		data: new BasicData('erreur'),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule],
})
export class AppRoutingModule { }
