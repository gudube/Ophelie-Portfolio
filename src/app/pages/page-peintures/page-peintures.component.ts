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
		{ fileName: 'peintures/p1.jpg', title: 'PORTAIT D’UN CIEL, UN JOUR QUI N’EXISTE PAS ENCORE', subtitle: '2014, acrylique sur toile, 76 x 61cm', description: 'description' },
		{ fileName: 'peintures/p2.jpg', title: 'AU-DELÀ DU RÉEL', subtitle: '2018, acrylique sur toile, 51 x 40cm', description: 'description' },
		{ fileName: 'peintures/p3.jpg', title: 'DISPARITION', subtitle: '2018, acrylique sur toile, 51 x 40cm', description: 'description' },
		{ fileName: 'peintures/p4.jpg', title: 'FRAGMENT D’ODYSSÉE', subtitle: '2020, acrylique sur toile, 51 x 40cm', description: 'description' },
		{ fileName: 'peintures/p5.jpg', title: 'NE FERME PAS LES YEUX', subtitle: '2020, acrylique sur toile, 51 x 40cm', description: 'description' },
		{ fileName: 'peintures/p6.jpg', title: 'LA TIRADE DU SCORPION', subtitle: '2021, acrylique sur toile, 61 x 45.5cm', description: 'description' },
		{ fileName: 'peintures/p7.jpg', title: 'ESPÉRONS, AVANT QUE TOUT NE FONDE', subtitle: '2021, acrylique sur toile, 30.5 x 30.5cm', description: 'description' },
		{ fileName: 'peintures/p8.jpg', title: 'ANNIE', subtitle: '2021, acrylique sur toile, 30.5 x 30.5cm', description: 'description' },
		{ fileName: 'peintures/p9.jpg', title: 'JE VOUS LAISSE L’EXPLORER', subtitle: '2021, acrylique sur papier d’aquarelle, 212.5 x 122cm', description: 'description' },
	];

	public shownDrawings: PictureModel[] = [];

	public filters = Filter;

	public currentFilter: Filter = Filter.None;

	constructor() {
	}

	ngOnInit(): void {
	}

	changeFilter(filter: Filter): void {
		if (filter === this.currentFilter) {
			this.currentFilter = Filter.None;
			this.shownDrawings = [];
		} else {
			this.currentFilter = filter;
			this.shownDrawings = this.drawings.filter((picture) => picture.fileName.startsWith(
				filter.toString(),
			));
		}
	}
}
