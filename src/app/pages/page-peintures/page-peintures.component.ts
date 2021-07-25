import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PhotoGridComponent } from 'src/app/ui-tools/photo-grid/photo-grid.component';
import { PictureModel } from '../../ui-tools/photo-grid/picture-model';

// eslint-disable-next-line no-shadow
enum Filter { None = '', Peintures = 'peintures/', Dessins = 'dessins/', Sculptures = 'sculptures/' }

@Component({
	selector: 'app-page-peintures',
	templateUrl: './page-peintures.component.html',
	styleUrls: ['./page-peintures.component.scss'],
})
export class PagePeinturesComponent implements OnInit {
	@ViewChild('photoGrid')
	public photoGrid!: ElementRef;

	private drawings: PictureModel[] = [
		{ fileName: 'peintures/p1.jpg', title: 'PORTAIT D’UN CIEL, UN JOUR QUI N’EXISTE PAS ENCORE', subtitle: '2014, acrylique sur toile, 76 x 61cm', description: 'description', subImages: ['peintures/p1.jpg', 'peintures/p1.jpg', 'peintures/p1.jpg'] },
		{ fileName: 'peintures/p2.jpg', title: 'AU-DELÀ DU RÉEL', subtitle: '2018, acrylique sur toile, 51 x 40cm', description: 'description', subImages: ['peintures/p2.jpg'] },
		{ fileName: 'peintures/p3.jpg', title: 'DISPARITION', subtitle: '2018, acrylique sur toile, 51 x 40cm', description: 'description', subImages: ['peintures/p3.jpg'] },
		{ fileName: 'peintures/p4.jpg', title: 'FRAGMENT D’ODYSSÉE', subtitle: '2020, acrylique sur toile, 51 x 40cm', description: 'description', subImages: ['peintures/p4.jpg'] },
		{ fileName: 'peintures/p5.jpg', title: 'NE FERME PAS LES YEUX', subtitle: '2020, acrylique sur toile, 51 x 40cm', description: 'description', subImages: ['peintures/p5.jpg'] },
		{ fileName: 'peintures/p6.jpg', title: 'LA TIRADE DU SCORPION', subtitle: '2021, acrylique sur toile, 61 x 45.5cm', description: 'description', subImages: ['peintures/p6.jpg'] },
		{ fileName: 'peintures/p7.jpg', title: 'ESPÉRONS, AVANT QUE TOUT NE FONDE', subtitle: '2021, acrylique sur toile, 30.5 x 30.5cm', description: 'description', subImages: ['peintures/p7.jpg'] },
		{ fileName: 'peintures/p8.jpg', title: 'ANNIE', subtitle: '2021, acrylique sur toile, 30.5 x 30.5cm', description: 'description', subImages: ['peintures/p8.jpg'] },
		{ fileName: 'peintures/p9.jpg', title: 'JE VOUS LAISSE L’EXPLORER', subtitle: '2021, acrylique sur papier d’aquarelle, 212.5 x 122cm', description: 'description', subImages: ['peintures/p9.jpg'] },
		{ fileName: 'dessins/d8.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d8.jpg'] },
		{ fileName: 'dessins/d7.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d7.jpg'] },
		{ fileName: 'dessins/d6.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d6.jpg'] },
		{ fileName: 'dessins/d5.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d5.jpg'] },
		{ fileName: 'dessins/d4.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d4.jpg'] },
		{ fileName: 'dessins/d3.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d3.jpg'] },
		{ fileName: 'dessins/d2.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d2.jpg'] },
		{ fileName: 'dessins/d1.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d1.jpg'] },
		{ fileName: 'dessins/d0.jpg', title: 'titre 8', subtitle: 'sous-titre 8', description: 'description', subImages: ['dessins/d0.jpg'] },
	];

	public shownDrawings: PictureModel[] = [];

	public filters = Filter;

	public currentFilter: Filter = Filter.None;

	public currentTitle = '';

	public hoverTitle: string | null = null;

	constructor() {
	}

	ngOnInit(): void {
		// document.getElementById('presentation1')?.addEventListener('mouseover', () => {
		// 	this.currentTitle = 'PEINTURES';
		// });
	}

	hoverImage(filter: Filter): void {
		if (filter === Filter.Peintures) {
			this.hoverTitle = 'PEINTURES';
		} else if (filter === Filter.Sculptures) {
			this.hoverTitle = 'SCULPTURES';
		} else if (filter === Filter.Dessins) {
			this.hoverTitle = 'DESSINS';
		} else {
			this.hoverTitle = null;
		}
	}

	unhoverImage(): void {
		this.hoverTitle = null;
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
		if (this.currentFilter === Filter.Peintures) {
			this.currentTitle = 'PEINTURES';
		} else if (this.currentFilter === Filter.Sculptures) {
			this.currentTitle = 'SCULPTURES';
		} else if (this.currentFilter === Filter.Dessins) {
			this.currentTitle = 'DESSINS';
		} else {
			this.currentTitle = '';
		}

		setTimeout(() => {
			if (this.shownDrawings !== []) {
				window.scrollTo({ top: document.getElementById('title-selected')?.offsetTop, behavior: 'smooth' });
			}
		}, 100);
	}
}
