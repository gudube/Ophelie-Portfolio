import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './seo-service.service';
import { TypedRouteData } from './app-routing.module';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'OPHELIE Portfolio';

	public showHeader = false;

	constructor(private router: Router, private activatedRoute: ActivatedRoute,
		private seoService: SeoService) {
	}

	ngOnInit(): void {
		this.router.events.pipe(
			filter((e) => e instanceof NavigationEnd),
			map(() => this.activatedRoute),
			map((route) => {
				// eslint-disable-next-line no-param-reassign
				while (route.firstChild) { route = route.firstChild; }
				return route;
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data),
		).subscribe((data) => {
			const typedData = data as TypedRouteData;
			if (typedData) {
				const seoData = typedData.seo;
				if (seoData) {
					this.seoService.updateTitle(seoData.title);
					this.seoService.updateMetaTags(seoData.metaTags);
				}
				this.showHeader = typedData.showHeader;
			}
		});
	}
}
