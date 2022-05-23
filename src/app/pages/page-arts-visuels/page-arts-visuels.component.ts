import { Component } from '@angular/core';
import { CarouselItem } from 'src/app/models/picture-model';

@Component({
	selector: 'app-page-arts-visuels',
	templateUrl: './page-arts-visuels.component.html',
	styleUrls: ['./page-arts-visuels.component.scss'],
})
export class PageArtsVisuelsComponent {
	public centerItem: CarouselItem = {
		title: 'PEINTURES',
		image: 'assets/peintures/p8.jpg',
		cadre: 'assets/arts-visuels/cadre.png',
		url: 'peintures/',
	}

	public rightItem: CarouselItem = {
		title: 'SCULPTURES',
		image: 'assets/sculptures/abeille1.jpg',
		cadre: 'assets/arts-visuels/cadre.png',
		url: 'sculptures/',
	}

	public leftItem: CarouselItem = {
		title: 'DESSINS',
		image: 'assets/dessins/d8.jpg',
		cadre: 'assets/arts-visuels/cadre.png',
		url: 'dessins/',
	}
}
