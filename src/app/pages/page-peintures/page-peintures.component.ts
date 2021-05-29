import { Component, OnInit } from '@angular/core';
import { PictureModel } from '../../ui-tools/photo-grid/picture-model';

// eslint-disable-next-line no-shadow
enum Filter { None = '', Peintures = 'peintures/', Dessins = 'dessins/', Sculptures = 'sculptures/' }

@Component({
	selector: 'app-page-peintures',
	templateUrl: './page-peintures.component.html',
	styleUrls: ['./page-peintures.component.scss'],
})
export class PagePeinturesComponent implements OnInit {
	private drawings: PictureModel[] = [
		{ fileName: 'dessins/d1.jpg', title: 'Avatar 1', description: '' },
		{ fileName: 'dessins/d2.jpg', title: 'Avatar 2', description: '' },
		{ fileName: 'dessins/d3.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d4.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d5.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d6.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d7.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d8.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d9.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d10.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d11.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d12.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d13.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d14.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d15.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d16.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d17.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d18.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d19.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d20.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d21.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d22.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d23.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d24.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d25.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d26.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d27.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d28.jpg', title: 'Titre', description: '' },
		{ fileName: 'dessins/d29.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p1.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p2.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p3.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p4.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p5.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p6.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p7.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p8.jpg', title: 'Titre', description: '' },
		{ fileName: 'peintures/p9.jpg', title: 'Titre', description: '' },
	];

	public shownDrawings: PictureModel[] = this.drawings;

	public filters = Filter;

	public currentFilter: Filter = Filter.None;

	constructor() {
	}

	ngOnInit(): void {
	}

	changeFilter(filter: Filter): void {
		if (filter === this.currentFilter) {
			this.currentFilter = Filter.None;
			this.shownDrawings = this.drawings;
		} else {
			this.currentFilter = filter;
			this.shownDrawings = this.drawings.filter((picture) => picture.fileName.startsWith(
				filter.toString(),
			));
		}
	}
}
