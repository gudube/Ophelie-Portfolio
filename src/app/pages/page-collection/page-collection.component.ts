import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collection } from 'src/app/models/picture-model';
import arts from 'src/assets/arts.json';

@Component({
	selector: 'app-page-collection',
	templateUrl: './page-collection.component.html',
	styleUrls: ['./page-collection.component.scss'],
})
export class PageCollectionComponent implements OnInit {
	public collection: Collection | null = null;

	public collapsedText = true;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
		const routeParams = this.router.url.split('/');
		const url = routeParams[routeParams.length - 2] as keyof typeof arts;
		const category = arts[url] as any;
		const collectionName = routeParams[routeParams.length - 1];
		category.collections.forEach((coll: Collection) => {
			if (coll.url === collectionName) {
				this.collection = coll;
			}
		});
	}
}
