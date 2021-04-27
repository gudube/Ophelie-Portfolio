import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PageChoreoComponent } from './page-choreo/page-choreo.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { PagePeinturesComponent } from './page-peintures/page-peintures.component';

type TypedRoutes = TypedRoute[]

interface TypedRoute extends Route {
  data: SeoData;
}

// for SEO rank on Google / metadata when using the link on other sites
interface SeoData {
	title: string,
	metaTags: {
		name?: string,
		property?: string,
		content: string
	}[],
}

// TODO: mettre a jour le SEO
const defaultTitle = 'OPHELIE | Portfolio'
const defaultDescription = '';
const defaultImage = '';

class BasicData implements SeoData {
	constructor(route: string, title: string = defaultTitle, description: string = defaultDescription, image: string = defaultImage) {
		this.title = title;
		this.metaTags = [
					{ name: 'description', content: description },
					{ property: 'og:title', content: title},
					{ property: 'og:description', content: description },
					{ property: 'og:image', content: image},
					{ property: 'og:url', content: `${environment.baseUrl}${route}` },
				];
	}
  title: string;
  metaTags: { name?: string | undefined; property?: string | undefined; content: string; }[];
}

const routes: TypedRoutes = [
  { path: '', pathMatch:'full',
    data: new BasicData('')
  },
  { path: 'choreographies', component: PageChoreoComponent,
    data: new BasicData('choreographies')
  },
  { path: 'gallerie', component: PagePeinturesComponent,
    data: new BasicData('gallerie')
  },
  { path: '**', component: PageErreurComponent,
    data: new BasicData('erreur')
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
