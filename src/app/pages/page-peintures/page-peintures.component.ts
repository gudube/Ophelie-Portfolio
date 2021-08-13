import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as arts from 'src/assets/arts.json';
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

	public peintures: PictureModel[] = arts.peintures;

	public dessins: PictureModel[] = arts.dessins;

	public sculptures: PictureModel[] = arts.sculptures;

	public filters = Filter;

	public currentFilter: Filter = Filter.None;

	public currentTitle = '';

	public hoverTitle: string | null = null;

	constructor() {
	}

	ngOnInit(): void {
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
		this.currentFilter = filter === this.currentFilter ? Filter.None : filter;

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
			if (this.currentFilter !== Filter.None) {
				window.scrollTo({ top: document.getElementById('title-selected')?.offsetTop, behavior: 'smooth' });
			}
		}, 200);
	}
}
