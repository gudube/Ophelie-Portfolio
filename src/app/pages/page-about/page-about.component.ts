import { Component, OnInit } from '@angular/core';

// eslint-disable-next-line no-shadow
// enum Page { None = '', Bio = 'peintures/', Dem = 'dessins/', Exp = 'sculptures/' }

@Component({
	selector: 'app-page-about',
	templateUrl: './page-about.component.html',
	styleUrls: ['./page-about.component.scss'],
})
export class PageAboutComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

	// public pages = Page;

	// public hoverTitle: string | null = null;

	// hoverImage(filter: Page): void {
	// 	if (filter === Page.Bio) {
	// 		this.hoverTitle = 'BIOGRAPHIE';
	// 	} else if (filter === Page.Dem) {
	// 		this.hoverTitle = 'DEMARCHE ARTISTIQUE';
	// 	} else if (filter === Page.Exp) {
	// 		this.hoverTitle = 'EXPERIENCES';
	// 	} else {
	// 		this.hoverTitle = null;
	// 	}
	// }

	// unhoverImage(): void {
	// 	this.hoverTitle = null;
	// }
}
