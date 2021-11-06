import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/picture-model';
import arts from 'src/assets/arts.json';

@Component({
	selector: 'app-page-collections',
	templateUrl: './page-collections.component.html',
	styleUrls: ['./page-collections.component.scss'],
})
export class PageCollectionsComponent implements OnInit {
	public category: Category | null = null;

	public route: string | null = null;

	constructor(private router: Router) { }

	ngOnInit(): void {
		const routeParams = this.router.url.split('/');
		this.route = routeParams[routeParams.length - 1];
		this.category = arts[this.route as keyof typeof arts] as Category;
	}
}
